import React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const testProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
};

const testVericalProps = {
  defaultIndex: "0",
  mode: "vertical" as const,
  onSelect: jest.fn(),
  className: "test",
};
const generateNiceMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>cool link</MenuItem>
      <MenuItem disabled>cool link 2</MenuItem>
      <MenuItem>cool link 3</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem index="3">dropdown1</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createStyleFile = () => {
  const cssFile: string = `
    .mingyue-submenu {
        display: none;
    }
    .mingyue-submenu.menu-opened {
        display: block;
      }
    `;
  const style = document.createElement("style");
  //style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};

let wrapper: HTMLElement,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem component", () => {
  it("should render the correct Menu and MenuItem based on the default props", () => {
    render(generateNiceMenu(testProps));
    menuElement = screen.getByTestId("test-menu");
    activeElement = screen.getByText("cool link");
    disabledElement = screen.getByText("cool link 2");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("menu test");
    //expect(screen.getAllByRole("menuitem").length).toEqual(3);
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4);
    expect(activeElement).toBeInTheDocument();
    expect(disabledElement).toBeInTheDocument();
  });
  it("click items should change active and call the right callback", () => {
    render(generateNiceMenu(testProps));
    menuElement = screen.getByTestId("test-menu");
    activeElement = screen.getByText("cool link");
    disabledElement = screen.getByText("cool link 2");
    fireEvent.click(activeElement);
    expect(activeElement).toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("0");
    fireEvent.click(disabledElement);
    expect(disabledElement).toHaveClass("is-disabled");
    expect(disabledElement).not.toHaveClass("is-active");
  });
  it("should render vertical mode when mode is set to vertical", () => {
    render(generateNiceMenu(testVericalProps));
    menuElement = screen.getByTestId("test-menu");
    activeElement = screen.getByText("cool link");
    disabledElement = screen.getByText("cool link 2");
    expect(menuElement).toHaveClass("menu-vertical");
  });
  it("should render dropdown items when hover the subMenu", async () => {
    render(generateNiceMenu(testProps));
    const cssFile = createStyleFile();
    document.head.appendChild(cssFile);
    // expect(screen.queryByText("dropdown1")).not.toHaveStyle({
    //   display: "none",
    // });
    expect(screen.queryByText("dropdown1")).not.toBeVisible();
    const dropdownItem = screen.getByText("dropdown");
    fireEvent.mouseEnter(dropdownItem);
    await waitFor(() => {
      expect(screen.queryByText("dropdown1")).toBeVisible();
    });
    fireEvent.mouseLeave(dropdownItem);
    await waitFor(() => {
      expect(screen.queryByText("dropdown1")).not.toBeVisible();
    });
    fireEvent.click(screen.getByText("dropdown1"));
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
  });
});
