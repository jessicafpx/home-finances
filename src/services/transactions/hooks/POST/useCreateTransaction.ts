import { useToast } from "@/hooks/useToast";
import { queryClient } from "@/services/config/queryClient";
import { globalQueryKeys } from "@/services/config/queryKeys";
import { api } from "@/services/endpoints";
import { useMutation } from "react-query";
import { TUseCreateTransactionOptions, Transaction } from "../../contract";

const createTransaction = async (transactionData: Transaction) => {
  const { data } = await api.postTransaction(transactionData);

  return data;
};

export const useCreateTransaction = (
  options?: TUseCreateTransactionOptions
) => {
  const { addToast } = useToast();
  const { onSuccess } = options || {};

  return useMutation({
    mutationFn: async (transactionData: Transaction) =>
      createTransaction(transactionData),
    onSuccess: () => {
      onSuccess && onSuccess();
      addToast({
        title: "Sucesso!",
        subtitle: "Transação criada com sucesso.",
      });
      queryClient.invalidateQueries([globalQueryKeys["useListTransactions"]]);
    },
    onError: () => {
      addToast({
        title: "Não foi possível criar a transação",
        subtitle: "Tente novamente.",
        type: "error",
      });
    },
  });
};
