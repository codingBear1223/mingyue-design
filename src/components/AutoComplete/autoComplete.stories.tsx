import { Meta, StoryObj } from "@storybook/react";
import AutoComplete, { Suggest } from "./autoComplete";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
const list = [
  { value: "1", label: "ab" },
  { value: "12", label: "bcd" },
  { value: "123", label: "cde" },
];
interface StorySuggest {
  label: string;
}

const fetchSuggestions = (keyword: string) => {
  return list.filter((item) => item.value.indexOf(keyword) > -1);
};
const meta = {
  title: "Example/AutoComplete",
  component: AutoComplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fetchSuggestions: {
      control: { type: "object" },
      action: "fetchSuggestions",
    },
    onSelect: { control: { type: "object" }, action: "onSelect" },
  },
  args: {
    data: list,
    value: "ab",
    fetchSuggestions: async (
      keyword: string
    ): Promise<Suggest<StorySuggest>[]> => {
      const res = await fetch(
        `https://api.github.com/search/users?q=${keyword}`
      );
      const { items = [] } = await res.json();
      const len = items.length > 10 ? 10 : items.length;
      return items.length > 0
        ? items.slice(0, len).map((item: any) => ({
            value: item.login,
            label: item.login,
          }))
        : [];
    },
    onSelect: (item) => {
      console.log(item);
    },
  },
} satisfies Meta<typeof AutoComplete>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "ab",
    data: list,
    // fetchSuggestions: (keyword: string) => {
    //   const results = list.filter((item) => item.label.indexOf(keyword) > -1);
    //   console.log(results);
    //   return results;
    // },
    fetchSuggestions: (keyword: string) => {
      return fetch(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => res.json())
        .then(({ items }) => {
          return items.slice(0, 10).map((item: any) => ({
            value: item.login,
            label: item.login,
          }));
        });
    },
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState(args.value);
    const renderOption = (item: any) => {
      return <h3>{item.label}</h3>;
    };
    return (
      <AutoComplete
        {...args}
        onSelect={(item) => {
          setInputValue(item?.label);
          console.log(item);
        }}
        renderOption={renderOption}
      />
    );
  },
};
