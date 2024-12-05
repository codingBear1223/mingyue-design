import React from "react";
import { ThemeProps } from "../Icon/icon";

export interface ProgressProps {
  percent: number;
  strokeHeight?: number; // 进度条高度
  showText?: boolean; // 是否显示百分比
  styles?: React.CSSProperties; // 进度条样式
  theme?: ThemeProps; // 进度条主题
}

const Progress: React.FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props;
  return (
    <div className="progress-bar" style={styles}>
      <div
        className={`progress-bar-outer progress-bar-outer-${theme}`}
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`progress-bar-inner progress-bar-inner-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
};

export default Progress;
