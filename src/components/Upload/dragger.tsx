import classNames from "classnames";
import React, { useState } from "react";

interface DraggerProps {
  onFile: (file: FileList) => void;
  children: React.ReactNode;
}
const Dragger: React.FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classes = classNames("mingyue-drag", {
    "is-dragover": dragOver,
  });
  const handleDrag = (e: React.DragEvent<HTMLDivElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };
  return (
    <div
      className={classes}
      onDragOver={(e) => handleDrag(e, true)}
      onDragLeave={(e) => handleDrag(e, false)}
    >
      {children}
    </div>
  );
};

export default Dragger;
