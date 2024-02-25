import { AxiosPromise } from "axios";
import apiBase, { MethodEnum } from "../api";
import { Transaction } from "../transactions/contract";
import { User } from "../users/contract";

export const api = {
  getUsers: (): AxiosPromise<User[]> =>
    apiBase({
      title: "Get Users",
      endpoint: "/users",
      method: MethodEnum.GET,
    }),
  updateUser: (userData: User): AxiosPromise<any> =>
    apiBase({
      title: "Update User",
      endpoint: `/users/${userData.id}`,
      method: MethodEnum.PUT,
      data: userData,
    }),
  getTransactions: (): AxiosPromise<Transaction[]> =>
    apiBase({
      title: "Get Transactions",
      endpoint: "/transactions",
      method: MethodEnum.GET,
    }),
  postTransaction: (transactionData: Transaction): AxiosPromise<any> =>
    apiBase({
      title: "Post Transaction",
      endpoint: "/transactions",
      method: MethodEnum.POST,
      data: transactionData,
    }),
  deleteTransaction: (id: string): AxiosPromise<any> =>
    apiBase({
      title: "Delete Transaction",
      endpoint: `/transactions/${id}`,
      method: MethodEnum.DELETE,
    }),
  updateTransaction: (transactionData: Transaction): AxiosPromise<any> =>
    apiBase({
      title: "Update Transaction",
      endpoint: `/transactions/${transactionData.id}`,
      method: MethodEnum.PUT,
      data: transactionData,
    }),
};
