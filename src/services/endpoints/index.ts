import { AxiosPromise } from "axios";
import apiBase, { MethodEnum } from "../api";

export const usersApi = {
  getUsers: (): AxiosPromise<User[]> =>
    apiBase({
      title: "Get Users",
      endpoint: "/users",
      method: MethodEnum.GET,
    }),
};
