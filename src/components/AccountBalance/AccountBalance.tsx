import React from "react";
import "./AccountBalance.css";

interface Props {
  balance: number;
}

const AccountBalance: React.FC<Props> = ({ balance }) => {
  return (
    <header className="sticky-header">
      <div className="header-left">
        <h1>Accounting System</h1>
      </div>
      <div className="header-right">
        <h2>Account Balance: ${balance.toFixed(2)}</h2>
      </div>
    </header>
  );
};

export default AccountBalance;
