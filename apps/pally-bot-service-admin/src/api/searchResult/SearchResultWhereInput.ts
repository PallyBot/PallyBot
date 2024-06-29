import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SearchQueryWhereUniqueInput } from "../searchQuery/SearchQueryWhereUniqueInput";

export type SearchResultWhereInput = {
  id?: StringFilter;
  resultText?: StringNullableFilter;
  searchQuery?: SearchQueryWhereUniqueInput;
};
