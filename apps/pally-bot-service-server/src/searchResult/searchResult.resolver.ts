import * as graphql from "@nestjs/graphql";
import { SearchResultResolverBase } from "./base/searchResult.resolver.base";
import { SearchResult } from "./base/SearchResult";
import { SearchResultService } from "./searchResult.service";

@graphql.Resolver(() => SearchResult)
export class SearchResultResolver extends SearchResultResolverBase {
  constructor(protected readonly service: SearchResultService) {
    super(service);
  }
}
