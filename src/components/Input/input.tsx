import React from "react";
import { IconProps } from "../Icon/icon";
import classNames from "classnames";
import Icon from "../Icon/icon";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  disabled?: boolean;
  size?: "large" | "middle" | "small";
  icon?: IconProps;
  prepend?: string | React.ReactNode;
  append?: string | React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    disabled = false,
    size = "middle",
    icon,
    prepend,
    append,
    className,
    ...restProps
  } = props;
  const classes = classNames("mingyue-input", className, {
    [`input-${size}`]: size,
    "input-disabled": disabled,
  });
  const prefixClasses = classNames("input-prefix", {
    [`input-prefix-${size}`]: size,
  });
  const suffixClasses = classNames("input-suffix", {
    [`input-suffix-${size}`]: size,
  });
  const iconClasses = classNames("input-icon", {
    [`input-icon-${size}`]: size,
  });
  if ("value" in props) {
    delete restProps.defaultValue;
    if (typeof restProps.value === "undefined" || restProps.value === null) {
      restProps.value = "";
    }
  }

  return (
    <div className="wrapper">
      {prepend && <div className={prefixClasses}>{prepend}</div>}
      <div className="input-wrapper">
        <input className={classes} disabled={disabled} {...restProps}></input>
        {icon && <Icon {...icon} className={iconClasses} data-testid="icon" />}
      </div>
      {append && <div className={suffixClasses}>{append}</div>}
    </div>
  );
};

export default Input;
