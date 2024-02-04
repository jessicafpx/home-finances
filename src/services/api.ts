import axios, { AxiosPromise } from "axios";

export enum MethodEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

interface ObjectDesc {
  [key: string]: any;
}

interface CallOptions {
  endpoint: string;
  method: MethodEnum;
  token?: string;
  refreshToken?: string;
  params?: ObjectDesc;
  data?: ObjectDesc;
  headers?: ObjectDesc;
  title: string;
}

const api = axios.create({
  baseURL: "https://60296a8a289eb50017cf7aac.mockapi.io",
});

const apiBase = <T>(call: CallOptions): AxiosPromise<T> => {
  let { headers } = call;

  const {
    endpoint,
    method = MethodEnum.GET,
    params = {},
    data = {},
    title = "",
  } = call;

  const defaultHeaders = {
    "Content-Type": "application/json",
    "Client-Device": "browser",
    "Accept-Language": "pt-BR",
    "source-version": "v1",
  };

  headers = { ...headers, ...defaultHeaders };

  if (method === MethodEnum.GET) {
    return api(endpoint, {
      params: { ...params },
      headers,
      method,
    });
  }

  return api(endpoint, {
    headers,
    method,
    data,
  });
};

export default apiBase;
