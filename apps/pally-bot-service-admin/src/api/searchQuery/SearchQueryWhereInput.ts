import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SearchResultListRelationFilter } from "../searchResult/SearchResultListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SearchQueryWhereInput = {
  id?: StringFilter;
  queryText?: StringNullableFilter;
  searchResults?: SearchResultListRelationFilter;
  user?: UserWhereUniqueInput;
};
