import { SearchQuery } from "../searchQuery/SearchQuery";

export type SearchResult = {
  createdAt: Date;
  id: string;
  resultText: string | null;
  searchQuery?: SearchQuery | null;
  updatedAt: Date;
};
