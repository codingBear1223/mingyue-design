import React, { FunctionComponentElement, useContext, useState } from "react";
import classNames from "classnames";
import { MenuProps, MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const subMenuContext = useContext(MenuContext);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": subMenuContext.index === index,
  });
  const renderChildren = () => {
    const subMenuClasses = classNames("mingyue-submenu", {
      "menu-opened": menuOpen,
    });
    const subMenuItems = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { name } = childElement.type;
      if (name === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error(
          "Warning: SubMenu has a child which is not a MenuItem component"
        );
      }
    });

    return (
      <Transition
        in={menuOpen}
        timeout={300}
        classNames="zoom-in-bottom"
        appear
        unmountOnExit
      >
        <ul className={subMenuClasses}>{subMenuItems}</ul>
      </Transition>
    );
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };
  const clickEvents =
    subMenuContext.mode === "vertical" ? { onClick: handleClick } : {};
  const hoverEvents =
    subMenuContext.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {};
  return (
    <li className={classes} key={index} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
