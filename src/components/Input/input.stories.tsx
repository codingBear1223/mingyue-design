import { StoryObj, Meta } from "@storybook/react";
import { useState, useEffect } from "react";
import { action } from "@storybook/addon-actions";
import Input from "./input";

const meta = {
  component: Input,
  title: "Example/Input",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "middle", "large"],
    },
    append: {
      control: "text",
    },
    prepend: {
      control: "text",
    },
  },
  args: {
    size: "middle",
    disabled: false,
    placeholder: "请输入内容",
  },
} satisfies Meta<typeof Input>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    size: "middle",
    disabled: false,
    placeholder: "请输入内容",
  },
};

export const Large: StoryObj<typeof meta> = {
  args: {
    size: "large",
    disabled: false,
    placeholder: "请输入内容",
  },
};

export const WithIcon: StoryObj<typeof meta> = {
  args: {
    icon: {
      icon: "arrow-down",
      theme: "primary",
      size: "1x",
    },
  },
};

export const WithPrepend: StoryObj<typeof meta> = {
  args: {
    prepend: "https://",
    placeholder: "请输入内容",
  },
};

export const WithAppend: StoryObj<typeof meta> = {
  args: {
    append: ".com",
    placeholder: "请输入内容",
  },
};

export const ControlledInput: StoryObj<typeof meta> = {
  args: {
    value: "test",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <Input
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onBlur={() => {
          alert(value);
        }}
      />
    );
  },
};
