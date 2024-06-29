import { SortOrder } from "../../util/SortOrder";

export type SearchResultOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  resultText?: SortOrder;
  searchQueryId?: SortOrder;
  updatedAt?: SortOrder;
};
