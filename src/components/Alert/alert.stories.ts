import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Alert from "./alert";

const meta = {
  component: Alert,
  title: "Example/Alert",
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    // 添加样式支持
    styles: {
      margin: "20px",
    },
    docs: {
      description: {
        component: "这是一个弹窗组件",
      },
    },
  },
  args: {
    title: "默认标题",
    description: "默认描述",
    type: "success",
    show: true,
    onclick: () => {
      action("alert-click");
    },
  },
  argTypes: {
    title: { control: "text", defaultValue: "默认标题" },
    description: { control: "text", defaultValue: "默认描述" },
    type: {
      control: "select",
      defaultValue: "default",
      options: ["success", "danger", "warning"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: "success",
  },
};
export const Danger: Story = {
  args: {
    type: "danger",
  },
};
export const Warning: Story = {
  args: {
    type: "warning",
  },
};
