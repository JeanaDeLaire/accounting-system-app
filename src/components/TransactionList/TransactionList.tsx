import React from "react";
import { Transaction } from "../../shared/types/types";
import "./TransactionList.css";

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h2>Last 5 Transactions</h2>
      <div>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="transaction-container"
            data-testid="transaction-item"
          >
            <div>
              <span>Date: {transaction.date}</span>
              <span>Amount: ${transaction.amount.toFixed(2)}</span>
              <span>Type: {transaction.type}</span>
              <span>Description: {transaction.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
