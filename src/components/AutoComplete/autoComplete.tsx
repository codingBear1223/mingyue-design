import Input, { InputProps } from "../Input/input";
import React, { useState, useEffect, useRef } from "react";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import classNames from "classnames";
import useClickOutside from "../../hooks/useClickOutside";
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
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const debouncedValue = useDebounce(inputValue, 300);
  const triggerRef = useRef<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);
  useClickOutside(componentRef, () => {
    setSuggestions([]);
  });

  useEffect(() => {
    if (debouncedValue && triggerRef.current) {
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
    triggerRef.current = true;
    setInputValue(value);
  };

  const handleChangeValue = (item: Suggest<any>) => {
    setInputValue(item.value);
    setSuggestions([]);
    onSelect && onSelect(item);
    triggerRef.current = false;
  };

  const generateDropDown = () => {
    return (
      <ul className="mingyue-suggestion-list">
        {suggestions.map((item, index) => {
          const dropDownClass = classNames("mingyue-suggestion-item", {
            "mingyue-suggestion-item-is-active": highlightIndex === index,
          });
          return (
            <li
              key={index}
              className={dropDownClass}
              onClick={() => {
                handleChangeValue(item);
              }}
            >
              {renderOption ? renderOption(item) : item.value}
            </li>
          );
        })}
      </ul>
    );
  };

  const highlight = (index: number) => {
    console.log("index", index);
    if (index < 0) index = 0;
    if (index > suggestions.length - 1) index = suggestions.length - 1;
    setHighlightIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("e.key", e.key);
    switch (e.key) {
      case "Enter":
        if (suggestions[highlightIndex]) {
          setHighlightIndex(-1);
          handleChangeValue(suggestions[highlightIndex]);
        }
        break;
      case "ArrowUp":
        highlight(highlightIndex - 1);
        break;
      case "ArrowDown":
        highlight(highlightIndex + 1);
        break;
      case "Escape":
        setSuggestions([]);
        setHighlightIndex(-1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mingyue-auto-complete" ref={componentRef}>
      <Input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
        {...restProps}
      />
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
