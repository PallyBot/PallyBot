import { SearchQueryWhereUniqueInput } from "../searchQuery/SearchQueryWhereUniqueInput";

export type SearchResultCreateInput = {
  resultText?: string | null;
  searchQuery?: SearchQueryWhereUniqueInput | null;
};
