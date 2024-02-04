import { usersQueryKeys } from "../users/queryKeys";
import { transactionsQueryKeys } from "../transactions/queryKeys";

export const globalQueryKeys = {
  ...usersQueryKeys,
  ...transactionsQueryKeys,
};
