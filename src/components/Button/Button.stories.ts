import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button, { ButtonSize, ButtonType } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    // 添加样式支持
    styles: {
      margin: "20px",
    },
    docs: {
      description: {
        component: "这是一个按钮组件",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    btnType: {
      control: "select",
      defaultValue: ButtonType.Default,
      options: Object.values(ButtonType),
      description: "按钮类型",
    },
    size: {
      control: "select",
      defaultValue: ButtonSize.Large,
      options: Object.values(ButtonSize),
      description: "按钮大小",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      description: "是否禁用",
    },
    href: { control: "text", defaultValue: "#", description: "跳转链接" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: (e: React.MouseEvent) => {
      action("button-click")(e);
      console.log("Button clicked!", e);
    },
    disabled: false,
    href: "#",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    btnType: ButtonType.Primary,
    children: "Button",
    onClick: (e: React.MouseEvent) => {
      action("primary-button-clicked")(e);
      // 添加特定于 Primary 按钮的处理逻辑
      console.log("Primary button clicked");
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: ButtonSize.Large,
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: ButtonSize.Small,
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    btnType: ButtonType.Link,
    children: "Button",
  },
};

export const Danger: Story = {
  args: {
    btnType: ButtonType.Danger,
    children: "Button",
  },
};
