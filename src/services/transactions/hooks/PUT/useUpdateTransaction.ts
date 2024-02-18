import { useToast } from "@/hooks/useToast";
import { queryClient } from "@/services/config/queryClient";
import { globalQueryKeys } from "@/services/config/queryKeys";
import { api } from "@/services/endpoints";
import { useMutation } from "react-query";
import { TUseCreateTransactionOptions, Transaction } from "../../contract";

const updateTransaction = async (transactionData: Transaction) => {
  const { data } = await api.updateTransaction(transactionData);

  return data;
};

export const useUpdateTransaction = (
  options?: TUseCreateTransactionOptions
) => {
  const { addToast } = useToast();
  const { onSuccess } = options || {};

  return useMutation({
    mutationFn: async (transactionData: Transaction) =>
      updateTransaction(transactionData),
    onSuccess: () => {
      onSuccess && onSuccess();
      addToast({
        title: "Sucesso!",
        subtitle: "Transação atualizada com sucesso.",
      });
      queryClient.invalidateQueries([globalQueryKeys["useListTransactions"]]);
    },
    onError: () => {
      addToast({
        title: "Não foi possível atualizar a transação",
        subtitle: "Tente novamente.",
        type: "error",
      });
    },
  });
};
