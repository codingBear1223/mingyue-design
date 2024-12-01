import Input, { InputProps } from "../Input/input";
import React, { useState, useEffect } from "react";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
export interface DataSourceType {
  value: string;
}
export type Suggest<T extends object = {}> = T & DataSourceType;
interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  value: string;
  data: Suggest[];
  fetchSuggestions: (str: string) => Suggest<any>[] | Promise<Suggest<any>[]>; // 返回值可以是同步的，也可以是异步的
  onSelect: (item: Suggest<any>) => void;
  renderOption?: (item: Suggest<any>) => React.ReactNode; // 渲染下拉选项
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const {
    value,
    data,
    fetchSuggestions,
    onSelect,
    renderOption,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<Suggest<any>[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce(inputValue, 300);

  useEffect(() => {
    if (debouncedValue) {
      const results = fetchSuggestions(debouncedValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setSuggestions(data);
          setLoading(false);
        });
      } else {
        setSuggestions(results);
      }
    } else {
      setSuggestions([]);
    }
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  const handleChangeValue = (item: Suggest<any>) => {
    setInputValue(item.value);
    setSuggestions([]);
    onSelect && onSelect(item);
  };

  const generateDropDown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              handleChangeValue(item);
            }}
          >
            {renderOption ? renderOption(item) : item.value}
          </li>
        ))}
      </ul>
    );
  };

  console.log("666", restProps);

  return (
    <div className="mingyue-auto-complete">
      <Input onChange={handleChange} value={inputValue} {...restProps} />
      {loading && (
        <ul>
          <Icon icon="spinner" spin />
        </ul>
      )}
      {!loading && suggestions.length > 0 && generateDropDown()}
    </div>
  );
};

export default AutoComplete;
