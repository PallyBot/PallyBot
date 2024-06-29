import { SortOrder } from "../../util/SortOrder";

export type SearchQueryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  queryText?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
