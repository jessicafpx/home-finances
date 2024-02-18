import { queryClient } from "@/services/config/queryClient";
import { globalQueryKeys } from "@/services/config/queryKeys";
import { api } from "@/services/endpoints";
import { useMutation } from "react-query";

const createTransaction = async (transactionData: any) => {
  const { data } = await api.postTransaction(transactionData);

  return data;
};

export const useCreateTransaction = (options?: any) => {
  const { onSuccess } = options || {};

  return useMutation({
    mutationFn: async (transactionData: any) =>
      createTransaction(transactionData),
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries([globalQueryKeys["useListTransactions"]]);
    },
    onError: () => {
      console.log("erro");
    },
  });
};
