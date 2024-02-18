import { AxiosPromise } from "axios";
import apiBase, { MethodEnum } from "../api";
import { Transaction } from "../transactions/contract";

export const api = {
  getUsers: (): AxiosPromise<User[]> =>
    apiBase({
      title: "Get Users",
      endpoint: "/users",
      method: MethodEnum.GET,
    }),
  getTransactions: (): AxiosPromise<Transaction[]> =>
    apiBase({
      title: "Get Transactions",
      endpoint: "/transactions",
      method: MethodEnum.GET,
    }),
  postTransaction: (transactionData: any): AxiosPromise<any> =>
    apiBase({
      title: "Post Transaction",
      endpoint: "/transactions",
      method: MethodEnum.POST,
      data: transactionData,
    }),
};
