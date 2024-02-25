import { useToast } from "@/hooks/useToast";
import { queryClient } from "@/services/config/queryClient";
import { globalQueryKeys } from "@/services/config/queryKeys";
import { api } from "@/services/endpoints";
import { useMutation } from "react-query";
import { TUseUpdateUserOptions, User } from "../../contract";

const updateUser = async (userData: User) => {
  const { data } = await api.updateUser(userData);

  return data;
};

export const useUpdateUser = (options?: TUseUpdateUserOptions) => {
  const { addToast } = useToast();
  const { onSuccess } = options || {};

  return useMutation({
    mutationFn: async (userData: User) => updateUser(userData),
    onSuccess: () => {
      onSuccess && onSuccess();
      addToast({
        title: "Sucesso!",
        subtitle: "Categoria atualizada com sucesso.",
      });
      queryClient.invalidateQueries([globalQueryKeys["useListUsers"]]);
    },
    onError: () => {
      addToast({
        title: "Não foi possível atualizar a categoria",
        subtitle: "Tente novamente.",
        type: "error",
      });
    },
  });
};
