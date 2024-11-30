import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Icon from "./icon";

const meta = {
  component: Icon,
  title: "Example/Icon",
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
        component: "这是一个图标组件",
      },
    },
  },
  args: {
    icon: "search",
    theme: "primary",
  },
  argTypes: {
    icon: {
      control: "select",
      defaultValue: "search",
      options: ["search", "add", "edit", "delete", "arrow-down", "arrow-up"],
    },
    theme: {
      control: "select",
      defaultValue: "primary",
      options: ["primary", "secondary", "success", "danger", "warning"],
    },
    size: {
      control: "select",
      defaultValue: "1x",
      options: ["1x", "2x", "3x", "4x", "5x"],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "search",
    theme: "primary",
    size: "5x",
  },
};
export const Primary: Story = {
  args: {
    theme: "primary",
    icon: "arrow-down",
    size: "5x",
  },
};
export const Secondary: Story = {
  args: {
    theme: "secondary",
    icon: "arrow-up",
    size: "5x",
  },
};
export const Success: Story = {
  args: {
    theme: "success",
    icon: "add",
    size: "5x",
  },
};
export const Danger: Story = {
  args: {
    theme: "danger",
    icon: "add",
    size: "5x",
  },
};
export const Warning: Story = {
  args: {
    theme: "warning",
    icon: "edit",
    size: "5x",
  },
};
