import React, { useState, useEffect } from "react";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";
import {
  fetchBalance,
  fetchTransactions,
  postTransaction,
} from "./shared/api/api";
import { Transaction, ApiError } from "./shared/types/types";
import Banner from "./components/Banner/Banner";

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [transaction, setTransaction] = useState<Transaction>({
    date: "",
    amount: 0,
    type: "debit",
    description: "",
  });
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(false);
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const fetchAcountData = () => {
    Promise.all([fetchTransactions(), fetchBalance()])
      .then((links) => {
        const response1 = links[0];
        const response2 = links[1];
        setTransactions(response1.transactions.reverse());
        setBalance(response2.balance);
      })
      .catch((error) => {
        setIsAlert(true);
        setMessage(`"Error fetching transactions:", ${error}`);
        setIsBannerOpen(true);
      });
  };

  useEffect(() => {
    fetchAcountData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTransaction({
      ...transaction,
      [name]: name === "amount" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postTransaction(transaction);
      if (response.status === 200) {
        setIsAlert(false);
        setMessage("Transaction added successfully!");
        setIsBannerOpen(true);
        setTransaction({
          date: "",
          amount: 0,
          type: "debit",
          description: "",
        });
        fetchAcountData();
      }
    } catch (err) {
      const error = err as ApiError;
      const serverError = error?.response?.data?.error;
      setIsAlert(true);
      setMessage(
        `Error adding transaction: ${serverError ? serverError : error.message}`
      );
      setIsBannerOpen(true);
    }
  };

  return (
    <div className="app">
      <AccountBalance balance={balance} />
      {isBannerOpen && (
        <Banner
          message={message}
          setIsBannerOpen={setIsBannerOpen}
          isAlert={isAlert}
        />
      )}
      <TransactionForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        transaction={transaction}
      />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
