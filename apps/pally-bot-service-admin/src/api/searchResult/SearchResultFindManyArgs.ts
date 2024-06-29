import { SearchResultWhereInput } from "./SearchResultWhereInput";
import { SearchResultOrderByInput } from "./SearchResultOrderByInput";

export type SearchResultFindManyArgs = {
  where?: SearchResultWhereInput;
  orderBy?: Array<SearchResultOrderByInput>;
  skip?: number;
  take?: number;
};
