import { SearchQuery as TSearchQuery } from "../api/searchQuery/SearchQuery";

export const SEARCHQUERY_TITLE_FIELD = "queryText";

export const SearchQueryTitle = (record: TSearchQuery): string => {
  return record.queryText?.toString() || String(record.id);
};
