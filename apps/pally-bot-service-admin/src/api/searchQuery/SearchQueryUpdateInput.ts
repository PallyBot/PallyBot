import { SearchResultUpdateManyWithoutSearchQueriesInput } from "./SearchResultUpdateManyWithoutSearchQueriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SearchQueryUpdateInput = {
  queryText?: string | null;
  searchResults?: SearchResultUpdateManyWithoutSearchQueriesInput;
  user?: UserWhereUniqueInput | null;
};
