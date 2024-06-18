import axios from "axios";
import { BASE_API_PATH } from "../constants";
import { Transaction, ApiResponse } from "../types/types";

const axiosInstance = axios.create({
  baseURL: BASE_API_PATH,
});

// Fetch the current account balance
export const fetchBalance = async (): Promise<{ balance: number }> => {
  const response = await axiosInstance.get("/balance");
  return response.data;
};

// Fetch the last 5 transactions
export const fetchTransactions = async (): Promise<{
  transactions: Transaction[];
}> => {
  const response = await axiosInstance.get("/transactions");
  return response.data;
};

// Post a new transaction
export const postTransaction = async (
  transaction: Transaction
): Promise<ApiResponse> => {
  const response = await axiosInstance.post("/transaction", transaction);
  return response;
};
