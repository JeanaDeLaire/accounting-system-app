import { render, screen } from "@testing-library/react";
import TransactionList from "./TransactionList";
import { Transaction } from "../../shared/types/types";

// Mock transactions data for testing
const mockTransactions: Transaction[] = [
  {
    id: 1,
    date: "2024-06-20",
    amount: 100.0,
    type: "debit",
    description: "Grocery shopping",
  },
  {
    id: 2,
    date: "2024-06-19",
    amount: 50.0,
    type: "credit",
    description: "Refund",
  },
];

describe("TransactionList Component", () => {
  it('renders "Last 5 Transactions" heading', () => {
    render(<TransactionList transactions={mockTransactions} />);
    const headingElement = screen.getByText("Last 5 Transactions");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders each transaction correctly", () => {
    render(<TransactionList transactions={mockTransactions} />);

    // Check if each transaction detail is rendered
    mockTransactions.forEach((transaction) => {
      expect(screen.getByText(`Date: ${transaction.date}`)).toBeInTheDocument();
      expect(
        screen.getByText(`Amount: $${transaction.amount.toFixed(2)}`)
      ).toBeInTheDocument();
      expect(screen.getByText(`Type: ${transaction.type}`)).toBeInTheDocument();
      expect(
        screen.getByText(`Description: ${transaction.description}`)
      ).toBeInTheDocument();
    });
  });

  it("renders correct number of transactions", () => {
    render(<TransactionList transactions={mockTransactions} />);
    const transactionElements = screen.getAllByTestId("transaction-item");
    expect(transactionElements.length).toBe(mockTransactions.length);
  });
});
