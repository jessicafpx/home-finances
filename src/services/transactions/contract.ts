export enum TransactionTypeEnum {
  INCOME = "income",
  OUTCOME = "outcome",
}

export interface Transaction {
  name: string;
  id: string;
  date: string;
  category: string;
  price: number | string;
  type: TransactionTypeEnum;
}
