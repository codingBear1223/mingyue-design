import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Alert, { AlertProps } from "./alert";

const defaultProps: AlertProps = {
  description: "这是一个测试默认提升的文案",
  type: "default",
  onclick: jest.fn(),
};
describe("test Alert component", () => {
  it("should render default Alert", () => {
    render(<Alert {...defaultProps} />);
    const element = screen.getByText(defaultProps.description);
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("P");
    expect(element).toHaveClass("p p-default");
  });
  it("should Alert be closeable", () => {
    render(<Alert {...defaultProps} />);
    const element = screen.getByTestId("closeBtn");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("SPAN");
    expect(element).toHaveClass("close-btn");
    fireEvent.click(element);
    expect(defaultProps.onclick).toHaveBeenCalled();
  });
});
