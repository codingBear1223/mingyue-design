import React from "react";
import { Meta, StoryObj } from "@storybook/react";

const Welcome: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
        欢迎使用 Mingyue Design
      </h1>
      <p>
        Mingyue Design 是一个现代化的 React
        组件库，致力于提供简洁、易用且高性能的 UI 组件。
      </p>
      <h2>快速开始</h2>
      <pre
        style={{ background: "#f6f8fa", padding: "16px", borderRadius: "4px" }}
      >
        <code>npm install mingyue-design</code>
      </pre>
      <h2>特性</h2>
      <ul>
        <li>精心设计的 UI 组件</li>
        <li>开箱即用的组件</li>
        <li>使用 TypeScript 开发，提供完整的类型定义</li>
        <li>轻量级且高性能</li>
      </ul>
    </div>
  );
};

const meta = {
  title: "Welcome",
  component: Welcome,
  parameters: {
    layout: "fullscreen",
    viewMode: "docs",
  },
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof Welcome>;

export const WelcomePage: Story = {};
