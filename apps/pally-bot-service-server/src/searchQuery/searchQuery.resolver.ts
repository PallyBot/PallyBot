import * as graphql from "@nestjs/graphql";
import { SearchQueryResolverBase } from "./base/searchQuery.resolver.base";
import { SearchQuery } from "./base/SearchQuery";
import { SearchQueryService } from "./searchQuery.service";

@graphql.Resolver(() => SearchQuery)
export class SearchQueryResolver extends SearchQueryResolverBase {
  constructor(protected readonly service: SearchQueryService) {
    super(service);
  }
}
