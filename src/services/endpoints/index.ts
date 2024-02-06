import { AxiosPromise } from "axios";
import apiBase, { MethodEnum } from "../api";
import { Transaction } from "../transactions/contract";

export const usersApi = {
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
};
