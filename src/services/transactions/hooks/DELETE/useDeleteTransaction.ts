import { useToast } from "@/hooks/useToast";
import { queryClient } from "@/services/config/queryClient";
import { globalQueryKeys } from "@/services/config/queryKeys";
import { api } from "@/services/endpoints";
import { useMutation } from "react-query";
import { TUseCreateTransactionOptions } from "../../contract";

const deleteTransaction = async (id: string) => {
  const { data } = await api.deleteTransaction(id);

  return data;
};

export const useDeleteTransaction = (
  options?: TUseCreateTransactionOptions
) => {
  const { addToast } = useToast();
  const { onSuccess } = options || {};

  return useMutation({
    mutationFn: async (id: string) => deleteTransaction(id),
    onSuccess: () => {
      onSuccess && onSuccess();
      addToast({
        title: "Sucesso!",
        subtitle: "Transação excluída com sucesso.",
      });
      queryClient.invalidateQueries([globalQueryKeys["useListTransactions"]]);
    },
    onError: () => {
      addToast({
        title: "Não foi possível excluir a transação",
        subtitle: "Tente novamente.",
        type: "error",
      });
    },
  });
};
