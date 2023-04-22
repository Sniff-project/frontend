import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignInForm } from "../";

describe("Form component", () => {
  it("renders without errors", () => {
    render(<SignInForm />);
  });

  it("displays an error message when the form is submitted with an empty input", () => {
    const { getByTestId, getByText } = render(<SignInForm />);
    const submitButton = getByTestId("submit-button");

    fireEvent.click(submitButton);

    expect(getByText("Please enter a value")).toBeInTheDocument();
  });

  it("submits the form with a valid input", () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<SignInForm onSubmit={mockOnSubmit} />);
    const input = getByTestId("input");
    const submitButton = getByTestId("submit-button");

    userEvent.type(input, "test value");
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith("test value");
  });
});
