import { SearchResultCreateNestedManyWithoutSearchQueriesInput } from "./SearchResultCreateNestedManyWithoutSearchQueriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SearchQueryCreateInput = {
  queryText?: string | null;
  searchResults?: SearchResultCreateNestedManyWithoutSearchQueriesInput;
  user?: UserWhereUniqueInput | null;
};
