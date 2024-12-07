import React, { useRef, useState } from "react";
import Button, { ButtonType } from "../Button/button";
import axios, { AxiosProgressEvent } from "axios";
import UploadList from "./uploadList";
import Dragger from "./dragger";
interface UploadProps {
  action: string; // 上传的地址
  onProgress?: (percentage: number, file: File) => void; // 上传进度
  onSuccess?: (res: any, file: File) => void; // 上传成功
  onError?: (err: any, file: File) => void; // 上传失败
  beforeUpload?: (file: File) => boolean | Promise<File>; // 上传前检查
  onChange?: (file: File) => void; // 上传改变
  defaultFileList?: UploadFile[]; // 默认文件列表
  onRemove?: (file: UploadFile) => void; // 删除文件
  headers?: { [key: string]: any }; // 请求头
  name?: string; // 文件名
  data?: { [key: string]: any }; // 请求参数
  withCredentials?: boolean; // 是否携带cookie
  accept?: string; // 接受的文件类型
  multiple?: boolean; // 是否支持多文件上传
  drag?: boolean; // 是否支持拖拽上传
  children?: React.ReactNode; // 子组件
}

export interface UploadFile {
  uid: string;
  name: string;
  size?: number;
  status?: "ready" | "uploading" | "success" | "error";
  percent?: number;
  raw?: File; //源文件信息
  response?: any; // 服务器响应
  error?: any; // 错误信息
}

const Upload: React.FC<UploadProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    action,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    onRemove,
    defaultFileList,
    name,
    data,
    headers,
    withCredentials,
    accept,
    multiple,
    drag,
    children,
  } = props;
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);

  const handleClick = () => {
    inputRef.current?.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    if (!files) return;
    uploadFiles(files);
  };
  const uploadFiles = (files: FileList) => {
    const fileList = Array.from(files);
    fileList.forEach((file) => {
      if (beforeUpload) {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile as File);
          });
        } else if (result === true) {
          post(file);
        } else {
          onChange?.(file);
        }
      } else {
        post(file);
      }
    });
  };

  const post = (file: File) => {
    const _file: UploadFile = {
      name: file.name,
      size: file.size,
      uid: Date.now() + "upload-file",
      status: "ready",
      raw: file,
      percent: 0,
    };
    setFileList((prevList) => [...prevList, _file]);
    const formData = new FormData();
    formData.append(name || "file", file);
    data &&
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    axios
      .post(action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...headers,
        },
        withCredentials,
        onUploadProgress: (e: AxiosProgressEvent) => {
          setFileList((prevList) => {
            const newList = prevList.map((item) => {
              if (item.uid === _file.uid) {
                item.status = "uploading";
                item.percent = Math.round((e.loaded * 100) / (e.total || 0));
              }
              return item;
            });
            return newList;
          });
          if (onProgress && e.total) {
            const percentage = Math.round((e.loaded * 100) / (e.total || 0));
            if (percentage < 100) {
              onProgress?.(percentage, file);
            }
          }
        },
      })
      .then((res) => {
        setFileList((prevList) => {
          const newList = prevList.map((item) => {
            if (item.uid === _file.uid) {
              item.status = "success";
              item.response = res;
            }
            return item;
          });
          return newList;
        });
        onSuccess?.(res, file);
        onChange?.(file);
      })
      .catch((err) => {
        setFileList((prevList) => {
          const newList = prevList.map((item) => {
            if (item.uid === _file.uid) {
              item.status = "error";
              item.error = err;
            }
            return item;
          });
          return newList;
        });
        onError?.(err, file);
        onChange?.(file);
      });
  };
  console.log("fileList", fileList);
  return (
    <div className="mingyue-upload">
      {!drag && (
        <Button btnType="primary" onClick={handleClick}>
          上传文件
        </Button>
      )}
      {drag ? (
        <div
          className="mingyue-upload-input-wrapper"
          onClick={handleClick}
          style={{ display: "inline-block" }}
        >
          <Dragger onFile={uploadFiles}>{children}</Dragger>
          <input
            type="file"
            className="mingyue-upload-input"
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handleChange}
            accept={accept}
            multiple={multiple}
          />
        </div>
      ) : (
        <input
          type="file"
          className="mingyue-upload-input"
          style={{ display: "none" }}
          ref={inputRef}
          onChange={handleChange}
          accept={accept}
          multiple={multiple}
        />
      )}
      <UploadList
        fileList={defaultFileList || []}
        onRemove={onRemove || (() => {})}
      />
    </div>
  );
};

Upload.defaultProps = {
  name: "file",
};
export default Upload;
