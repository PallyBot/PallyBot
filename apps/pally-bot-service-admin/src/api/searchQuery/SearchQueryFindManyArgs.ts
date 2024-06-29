import { SearchQueryWhereInput } from "./SearchQueryWhereInput";
import { SearchQueryOrderByInput } from "./SearchQueryOrderByInput";

export type SearchQueryFindManyArgs = {
  where?: SearchQueryWhereInput;
  orderBy?: Array<SearchQueryOrderByInput>;
  skip?: number;
  take?: number;
};
