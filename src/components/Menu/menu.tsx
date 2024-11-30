import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  defaultIndex: string;
  className?: string;
  mode?: "horizontal" | "vertical";
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  children?: React.ReactNode;
  defaultOpenSubMenus?: string[];
}

export interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: "horizontal" | "vertical";
  defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<IMenuContext>({
  index: "0",
  onSelect: () => {},
});

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex = "0",
    className,
    mode = "horizontal",
    style,
    onSelect,
    children,
    defaultOpenSubMenus = [],
  } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const handleClick = (index: string) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { name } = childElement.type;
      if (name === "MenuItem" || name === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };
  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
    mode: mode,
  };
  const classes = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
