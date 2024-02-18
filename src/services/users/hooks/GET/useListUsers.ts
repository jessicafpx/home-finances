import { globalQueryKeys } from "@/services/config/queryKeys";
import { api } from "@/services/endpoints";
import { useQuery } from "react-query";

export const useListUsers = () => {
  const { data } = useQuery(
    [globalQueryKeys["useListUsers"]],
    () => api.getUsers(),
    {
      onError: () => {
        console.log("Erro ao buscar os usuários disponíveis");
      },
    }
  );

  return { data: data?.data };
};
