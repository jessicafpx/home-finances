import { globalQueryKeys } from "@/services/config/queryKeys";
import { api } from "@/services/endpoints";
import { useQuery } from "react-query";

export const useListUsers = () => {
  const { data } = useQuery([globalQueryKeys["useListUsers"]], () =>
    api.getUsers()
  );

  return { data: data?.data };
};
