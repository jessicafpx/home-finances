import { useToast } from "@/hooks/useToast";
import { globalQueryKeys } from "@/services/config/queryKeys";
import { api } from "@/services/endpoints";
import { useQuery } from "react-query";

export const useListTransactions = () => {
  const { addToast } = useToast();
  const { data } = useQuery(
    [globalQueryKeys["useListTransactions"]],
    () => api.getTransactions(),
    {
      onError: () => {
        addToast({
          title: "Erro ao buscar as transações disponíveis",
          type: "error",
        });
      },
    }
  );

  return { data: data?.data };
};
