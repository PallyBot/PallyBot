import { SearchQueryWhereUniqueInput } from "../searchQuery/SearchQueryWhereUniqueInput";

export type SearchResultUpdateInput = {
  resultText?: string | null;
  searchQuery?: SearchQueryWhereUniqueInput | null;
};
