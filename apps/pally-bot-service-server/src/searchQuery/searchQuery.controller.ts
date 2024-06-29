import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SearchQueryService } from "./searchQuery.service";
import { SearchQueryControllerBase } from "./base/searchQuery.controller.base";

@swagger.ApiTags("searchQueries")
@common.Controller("searchQueries")
export class SearchQueryController extends SearchQueryControllerBase {
  constructor(protected readonly service: SearchQueryService) {
    super(service);
  }
}
