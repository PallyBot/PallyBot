import { SearchResult } from "../searchResult/SearchResult";
import { User } from "../user/User";

export type SearchQuery = {
  createdAt: Date;
  id: string;
  queryText: string | null;
  searchResults?: Array<SearchResult>;
  updatedAt: Date;
  user?: User | null;
};
