import { globalQueryKeys } from "@/services/config/queryKeys";
import { usersApi } from "@/services/endpoints";
import { useQuery } from "react-query";

export const useListTransactions = () => {
  const { data } = useQuery(
    [globalQueryKeys["useListTransactions"]],
    () => usersApi.getTransactions(),
    {
      onError: () => {
        console.log("Erro ao buscar as transações disponíveis");
      },
    }
  );

  return { data: data?.data };
};
