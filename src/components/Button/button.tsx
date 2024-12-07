import React from "react";
import classNames from "classnames";
export type ButtonSize = "large" | "small";

export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
type NativeBunttonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeBunttonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType = "default",
    className,
    disabled = false,
    size,
    children,
    href,
    ...rest
  } = props;
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link") {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
};

export default Button;
