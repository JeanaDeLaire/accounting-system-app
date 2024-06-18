import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountBalance from "./AccountBalance";

describe("AccountBalance Component", () => {
  it("renders header with balance prop", () => {
    render(<AccountBalance balance={1000} />);
    const titleElement = screen.getByText("Accounting System");
    expect(titleElement).toBeInTheDocument();
    const balanceElement = screen.getByText("Account Balance: $1000.00");
    expect(balanceElement).toBeInTheDocument();
  });

  it("formats balance to two decimal places", () => {
    render(<AccountBalance balance={1234.5678} />);
    const balanceElement = screen.getByText("Account Balance: $1234.57");
    expect(balanceElement).toBeInTheDocument();
  });

  it("handles zero balance", () => {
    render(<AccountBalance balance={0} />);
    const balanceElement = screen.getByText("Account Balance: $0.00");
    expect(balanceElement).toBeInTheDocument();
  });
});
