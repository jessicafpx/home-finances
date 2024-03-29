export enum TransactionTypeEnum {
  INCOME = "income",
  OUTCOME = "outcome",
}

export interface Transaction {
  name: string;
  id: string;
  date: string | Date;
  category: string;
  price: number | string;
  type: TransactionTypeEnum;
}

export type TUseCreateTransactionOptions = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};
