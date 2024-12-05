import React from "react";
import { UploadFile } from "./upload";
import Icon from "../Icon/icon";
import Progress from "../Progress/progress";
interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (file: UploadFile) => void;
}

const UploadList: React.FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;
  return (
    <ul className="upload-list">
      {fileList.map((item) => {
        return (
          <li
            key={item.uid}
            className="upload-list-item"
            onClick={() => onRemove(item)}
          >
            <div className="file-info">
              <span className={`file-name file-name-${item.status}`}>
                <Icon icon="file-alt" theme="secondary" />
                {item.name}
              </span>
              <span className="file-status">
                {item.status === "success" && (
                  <Icon icon="check-circle" theme="success" />
                )}
                {item.status === "error" && (
                  <Icon icon="times-circle" theme="danger" />
                )}
                {item.status === "uploading" && (
                  <Icon icon="spinner" spin theme="primary" />
                )}
              </span>
              <span className="file-actions">
                <Icon icon="times" onClick={() => onRemove(item)} />
              </span>
            </div>
            {item.status === "uploading" && (
              <Progress percent={item.percent || 0} theme="primary" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
