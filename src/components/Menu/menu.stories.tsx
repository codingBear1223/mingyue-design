import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const menuMeta = {
  component: Menu,
  title: "Example/Menu",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    mode: {
      control: "select",
      defaultValue: "horizontal",
      options: ["horizontal", "vertical"],
    },
    defaultIndex: {
      control: "text",
      defaultValue: "0",
    },
  },
  args: {
    defaultIndex: "0",
    mode: "horizontal",
    onSelect: (index) => alert(index),
  },
} satisfies Meta<typeof Menu>;

const menuItemMeta = {
  component: MenuItem,
  title: "Example/MenuItem",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    index: {
      control: "text",
      defaultValue: "0",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
  args: {
    index: "0",
    disabled: false,
  },
} satisfies Meta<typeof MenuItem>;

const subMenuMeta = {
  component: SubMenu,
  title: "Example/SubMenu",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      defaultValue: "下拉菜单",
    },
    index: {
      control: "text",
      defaultValue: "0",
    },
  },
  args: {
    title: "下拉菜单",
    index: "0",
  },
} satisfies Meta<typeof SubMenu>;

export default menuMeta;
type MenuStory = StoryObj<typeof menuMeta>;
type MenuItemStory = StoryObj<typeof menuItemMeta>;
type SubMenuStory = StoryObj<typeof subMenuMeta>;

export const BasicMenu: MenuStory = {
  args: {
    defaultIndex: "0",
    mode: "horizontal",
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem>首页</MenuItem>
      <MenuItem>关于我们</MenuItem>
      <MenuItem>联系我们</MenuItem>
    </Menu>
  ),
};
export const VerticalMenu: MenuStory = {
  args: {
    defaultIndex: "0",
    mode: "vertical",
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem>首页</MenuItem>
      <MenuItem>关于我们</MenuItem>
      <MenuItem>联系我们</MenuItem>
    </Menu>
  ),
};

export const WithSubMenu: MenuStory = {
  args: {
    defaultIndex: "0",
    mode: "horizontal",
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem>首页</MenuItem>
      <MenuItem>关于我们</MenuItem>
      <SubMenu title="下拉菜单">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
      </SubMenu>
      <MenuItem>联系我们</MenuItem>
    </Menu>
  ),
};
