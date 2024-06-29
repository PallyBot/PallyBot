import { SearchResult as TSearchResult } from "../api/searchResult/SearchResult";

export const SEARCHRESULT_TITLE_FIELD = "id";

export const SearchResultTitle = (record: TSearchResult): string => {
  return record.id?.toString() || String(record.id);
};
