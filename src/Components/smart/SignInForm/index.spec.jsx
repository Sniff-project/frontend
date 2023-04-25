import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import SignInForm from "./";

describe("SignInForm", () => {
  test("should submit form with valid input", () => {
    const mockOnSubmit = jest.fn();

    render(<SignInForm onSubmit={mockOnSubmit} />);

    const emailInput = screen.getByPlaceholderText("Пошта або Номер телефону");
    const passwordInput = screen.getByPlaceholderText("Пароль");
    const submitButton = screen.getByText("Вхід");

    act(() => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(submitButton);
    });

    waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith({
        email: "test@test.com",
        password: "password123",
      });
    });
  });

  test("should show warning messages for invalid input", () => {
    render(<SignInForm onSubmit={() => {}} />);
    const emailInput = screen.getByPlaceholderText("Пошта або Номер телефону");
    const passwordInput = screen.getByPlaceholderText("Пароль");
    const submitButton = screen.getByText("Вхід");

    act(() => {
      fireEvent.change(emailInput, { target: { value: "invalid-email" } });
      fireEvent.change(passwordInput, { target: { value: "short" } });
      fireEvent.click(submitButton);
    });

    waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email address")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Password must be at least 6 characters long")
      ).toBeInTheDocument();
    });
  });

  test("should update formData state when input values are changed", () => {
    render(<SignInForm onSubmit={() => {}} />);
    const emailInput = screen.getByPlaceholderText("Пошта або Номер телефону");
    const passwordInput = screen.getByPlaceholderText("Пароль");

    act(() => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
    });

    waitFor(() => {
      expect(emailInput.value).toBe("test@test.com");
      expect(passwordInput.value).toBe("password123");
    });
  });

  test("should display validation error message when email input is empty", () => {
    render(<SignInForm onSubmit={() => {}} />);
    const emailInput = screen.getByPlaceholderText("Пошта або Номер телефону");
    const submitButton = screen.getByText("Вхід");

    act(() => {
      fireEvent.click(submitButton);
    });

    waitFor(() => {
      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });
  });

  test("should display validation error message when password input is empty", () => {
    render(<SignInForm onSubmit={() => {}} />);
    const passwordInput = screen.getByPlaceholderText("Пароль");
    const submitButton = screen.getByText("Вхід");

    act(() => {
      fireEvent.click(submitButton);
    });

    waitFor(() => {
      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });
  });
});
