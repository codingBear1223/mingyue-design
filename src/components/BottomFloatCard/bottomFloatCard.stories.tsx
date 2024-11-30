import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import BottomFloatCard from "./index";

const meta = {
  component: BottomFloatCard,
  title: "Example/BottomFloatCard",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
      defaultValue: "primary",
    },
    bottomOffset: {
      control: "number",
      defaultValue: 50,
    },
  },
  args: {
    type: "primary",
    bottomOffset: 50,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    type: "primary",
    children: (
      <div style={{ padding: "16px" }}>
        <h3>悬浮卡片内容</h3>
        <p>这里可以放置任何内容</p>
      </div>
    ),
  },
  render: (args) => {
    return (
      <div style={{ position: "relative", width: "100%" }}>
        <div style={{ height: "180vh" }}>请向下滚动</div>
        <BottomFloatCard {...args}></BottomFloatCard>
      </div>
    );
  },
};
export const Warning: Story = {
  args: {
    type: "warning",
    children: (
      <div style={{ padding: "16px" }}>
        <h3>悬浮卡片内容</h3>
        <p>这里可以放置任何内容</p>
      </div>
    ),
  },
  render: (args) => {
    return (
      <div style={{ position: "relative", width: "100%" }}>
        <div style={{ height: "180vh" }}>请向下滚动</div>
        <BottomFloatCard {...args}></BottomFloatCard>
      </div>
    );
  },
};
