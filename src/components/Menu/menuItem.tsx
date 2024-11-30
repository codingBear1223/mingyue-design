import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const itemContext = useContext(MenuContext);

  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": itemContext.index === index,
  });
  const handleClick = () => {
    if (itemContext.onSelect && !disabled && index) {
      itemContext.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick} role="menuitem">
      {children}
    </li>
  );
};

export default MenuItem;
