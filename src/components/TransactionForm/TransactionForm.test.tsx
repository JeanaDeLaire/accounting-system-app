import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import TransactionForm from "./TransactionForm";
import { Transaction } from "../../shared/types/types";

describe("TransactionForm component", () => {
  const mockTransaction: Transaction = {
    date: "",
    amount: 0,
    type: "debit",
    description: "",
  };

  const mockHandleChange = jest.fn();
  const mockHandleSubmit = jest.fn();

  beforeEach(() => {
    mockHandleChange.mockClear();
    mockHandleSubmit.mockClear();
  });

  it("renders form fields correctly", () => {
    render(
      <TransactionForm
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
        transaction={mockTransaction}
      />
    );

    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Amount")).toBeInTheDocument();
    expect(screen.getByLabelText("Type")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Transaction" })
    ).toBeInTheDocument();
  });

  it("calls handleChange on input change", () => {
    render(
      <TransactionForm
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
        transaction={mockTransaction}
      />
    );

    const amountInput = screen.getByLabelText("Amount");
    fireEvent.change(amountInput, { target: { value: "100" } });

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith(expect.anything());
  });

  it("calls handleSubmit on form submission", async () => {
    render(
      <TransactionForm
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
        transaction={mockTransaction}
      />
    );

    const form = screen.getByTestId("transaction-form");
    fireEvent.submit(form);

    await waitFor(() => {
      expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
