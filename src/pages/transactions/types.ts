export type TransactionsModalTypes =
  | "createTransaction"
  | "updateTransaction"
  | "deleteTransaction";

export type ModalTypesHub = {
  [type in TransactionsModalTypes]: React.ReactNode;
};
