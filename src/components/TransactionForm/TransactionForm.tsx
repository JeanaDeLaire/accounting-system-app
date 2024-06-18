import React from "react";
import { Transaction } from "../../shared/types/types";
import "./TransactionForm.css";

interface Props {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  transaction: Transaction;
}

const TransactionForm: React.FC<Props> = ({
  handleChange,
  handleSubmit,
  transaction,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="transaction-form"
      data-testid="transaction-form"
    >
      <h2>Add Transaction</h2>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Type</label>
        <select
          id="type"
          name="type"
          value={transaction.type}
          onChange={handleChange}
        >
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={transaction.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
