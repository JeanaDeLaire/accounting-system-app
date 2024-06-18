export interface Transaction {
  date: string;
  amount: number;
  type: "debit" | "credit";
  description: string;
  id?: number;
}

export interface ApiResponse {
  status: number;
  data: unknown;
}

export interface ApiError {
  response?: {
    data?: {
      error?: {
        message?: string;
      };
    };
  };
  message?: string;
}
