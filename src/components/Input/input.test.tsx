import { render, screen, fireEvent } from "@testing-library/react";
import Input, { InputProps } from "./input";

const defaultProps: InputProps = {
  placeholder: "请输入内容",
};

describe("test Input component", () => {
  it("should render basic input", () => {
    const handleChange = jest.fn();
    render(<Input {...defaultProps} onChange={handleChange} />);
    const element = screen.getByPlaceholderText("请输入内容");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("INPUT");
    expect(element).toHaveClass("input-middle");
    fireEvent.change(element, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalled();
    expect(element).toHaveValue("test");
  });
  it("should render disabled input", () => {
    render(<Input {...defaultProps} disabled />);
    const element = screen.getByPlaceholderText("请输入内容");
    expect(element).toBeDisabled();
  });
  it("should render input with icon", () => {
    render(
      <Input {...defaultProps} icon={{ icon: "search", theme: "primary" }} />
    );
    const element = screen.getByPlaceholderText("请输入内容");
    expect(element).toBeInTheDocument();
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("input-icon");
  });
  it("should render input with prepend and append", () => {
    render(<Input {...defaultProps} prepend="https://" append=".com" />);
    const element = screen.getByPlaceholderText("请输入内容");
    expect(element).toBeInTheDocument();
    const prependElement = screen.getByText("https://");
    expect(prependElement).toBeInTheDocument();
    const appendElement = screen.getByText(".com");
    expect(appendElement).toBeInTheDocument();
  });
  it("should render input with size", () => {
    render(<Input {...defaultProps} size="large" />);
    const element = screen.getByPlaceholderText("请输入内容");
    expect(element).toHaveClass("input-large");
  });
});
