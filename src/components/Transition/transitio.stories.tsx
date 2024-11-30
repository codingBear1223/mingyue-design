import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Transition from "./transition";

const meta = {
  title: "Example/Transition",
  component: Transition,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    animation: {
      control: "select",
      options: [
        "zoom-in-top",
        "zoom-in-left",
        "zoom-in-right",
        "zoom-in-bottom",
      ],
    },
  },
  args: {
    animation: "zoom-in-top",
    timeout: 300,
    in: true,
  },
} satisfies Meta<typeof Transition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTransition: Story = {
  args: {
    animation: "zoom-in-top",
    timeout: 300,
    wrapper: true,
  },
  render: (args) => {
    const [show, setShow] = useState(false); // 避免使用 'in' 作为变量名，因为它是保留字

    React.useEffect(() => {
      // 使用 useEffect 来处理副作用
      const timer = setTimeout(() => {
        setShow(true);
      }, 3000);

      return () => clearTimeout(timer); // 清理副作用
    }, []); // 空依赖数组，仅在组件挂载时执行

    return (
      <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        <Transition {...args} in={show}>
          <div>
            <h2>hello world</h2>
            <h2>hello world</h2>
            <h2>hello world</h2>
          </div>
        </Transition>
      </div>
    );
  },
};
export const LeftTransition: Story = {
  args: {
    animation: "zoom-in-left",
    timeout: 300,
    wrapper: true,
  },
  render: (args) => {
    const [show, setShow] = useState(false); // 避免使用 'in' 作为变量名，因为它是保留字

    React.useEffect(() => {
      // 使用 useEffect 来处理副作用
      const timer = setTimeout(() => {
        setShow(true);
      }, 3000);

      return () => clearTimeout(timer); // 清理副作用
    }, []); // 空依赖数组，仅在组件挂载时执行

    return (
      <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        <Transition {...args} in={show}>
          <div>
            <h2>hello world</h2>
            <h2>hello world</h2>
            <h2>hello world</h2>
          </div>
        </Transition>
      </div>
    );
  },
};
