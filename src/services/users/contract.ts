import { TransactionTypeEnum } from "../transactions/contract";

export interface Category {
  name: string;
  percent: number | null;
  type: TransactionTypeEnum;
  id: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  totalIncome: number;
  categories: Category[] | null;
}

export type TUseUpdateUserOptions = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};
