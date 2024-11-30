import React, { useEffect, useState } from "react";
import classNames from "classnames";

interface BottomFloatCardProps {
  children: React.ReactNode;
  bottomOffset?: number;
  type?: BottomFloatCardType;
}
export type BottomFloatCardType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";

const BottomFloatCard: React.FC<BottomFloatCardProps> = ({
  children,
  bottomOffset = 50,
  type = "primary",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [topDistance, setTopDistance] = useState(window.innerHeight - 100);

  const classes = classNames("bottom-float-card", {
    "bottom-float-card-hidden": !isVisible,
    [`bottom-float-card-${type}`]: type,
  });

  useEffect(() => {
    // 节流函数
    const throttle = (fn: Function, delay: number) => {
      let timer: NodeJS.Timeout | null = null;
      return function (this: any, ...args: any[]) {
        if (timer) return;
        timer = setTimeout(() => {
          fn.apply(this, args);
          timer = null;
        }, delay);
      };
    };

    // 使用节流包装滚动处理函数
    const handleScroll = throttle(() => {
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (pageHeight - (scrollTop + windowHeight) <= bottomOffset) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }, 100); // 100ms 的节流延迟

    // 监听窗口大小变化
    const handleResize = () => {
      setTopDistance(window.innerHeight - 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // 初始检查一次位置
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bottomOffset]);

  return (
    <div className={classes} style={{ top: `${topDistance}px` }}>
      {children}
    </div>
  );
};

export default BottomFloatCard;
