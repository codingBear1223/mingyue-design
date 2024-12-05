import { Meta, StoryObj } from "@storybook/react";
import Upload, { UploadFile } from "./upload";
import { resolve } from "path";

const meta = {
  title: "Example/Upload",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSuccess: {
      control: { type: "object" },
      action: "onSuccess",
    },
    onProgress: {
      control: { type: "object" },
      action: "onProgress",
    },
    action: {
      control: "text",
    },
    onError: {
      control: { type: "object" },
      action: "onError",
    },
  },
  args: {
    action: "https://jsonplaceholder.typicode.com/posts/",
    onSuccess: (res: any, file: File) => {
      console.log("onSuccess", res, file);
      alert("上传成功");
    },
    onProgress: (percentage: number, file: File) => {
      console.log(percentage, file);
    },
    onError: (err: any, file: File) => {
      console.log(err, file);
      alert("上传失败");
    },
  },
} satisfies Meta<typeof Upload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicUpload: Story = {
  args: {},
  render: (args) => {
    const onSuccess = (res: any, file: File) => {
      console.log(res, file);
      alert("上传成功");
    };
    const onProgress = (percentage: number, file: File) => {
      console.log(percentage, file);
    };
    const onError = (err: any, file: File) => {
      console.log(err, file);
      alert("上传失败");
    };
    const beforeUpload = (file: File) => {
      if (Math.round(file.size / 1024) > 50) {
        alert("文件大小不能超过50kb");
        return false;
      }
      return true;
    };
    const defaultFileList: UploadFile[] = [
      {
        uid: "1",
        name: "success.png",
        size: 1000,
        status: "success",
        raw: new File([], "success.png", { type: "image/png" }),
      },
      {
        uid: "2",
        name: "error.png",
        size: 1000,
        status: "error",
        raw: new File([], "error.png", { type: "image/png" }),
      },
      {
        uid: "3",
        name: "ready.png",
        size: 1000,
        status: "ready",
        raw: new File([], "ready.png", { type: "image/png" }),
      },
      {
        uid: "4",
        name: "uploading.png",
        size: 1000,
        status: "uploading",
        raw: new File([], "uploading.png", { type: "image/png" }),
        percent: 50,
      },
    ];
    const beforeUploadPromise = (file: File) => {
      return new Promise<File>((resolve, reject) => {
        if (Math.round(file.size / 1024) > 50) {
          alert("文件大小不能超过50kb");
          reject(file);
        }
        const newFile = new File([file], "success.png", { type: file.type });
        resolve(newFile);
      });
    };
    const onChange = (file: File) => {
      console.log("onChange", file);
    };
    return (
      <Upload
        action="https://jsonplaceholder.typicode.com/posts"
        onSuccess={onSuccess}
        onProgress={onProgress}
        onError={onError}
        beforeUpload={beforeUploadPromise}
        onChange={onChange}
        name="mingyuetest.png"
        data={{ token: "1234567890" }}
        withCredentials={true}
        defaultFileList={defaultFileList}
      />
    );
  },
};
