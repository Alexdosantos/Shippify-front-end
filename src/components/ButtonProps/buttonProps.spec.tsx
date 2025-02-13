import { expect, describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ButtonProps from "./ButtonProps";

describe("ButtonProps", () => {
  it("should render the button with the correct text", () => {
    render(<ButtonProps name="Test Button" onClick={() => {}} />);
    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button).toBeInTheDocument();
  });

  it("should call onClick when the button is clicked", () => {
    const onClickMock = vi.fn();
    render(<ButtonProps name="Test Button" onClick={onClickMock} />);
    const button = screen.getByRole("button", { name: "Test Button" });
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
