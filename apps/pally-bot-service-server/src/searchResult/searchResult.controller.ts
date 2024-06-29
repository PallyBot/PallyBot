import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SearchResultService } from "./searchResult.service";
import { SearchResultControllerBase } from "./base/searchResult.controller.base";

@swagger.ApiTags("searchResults")
@common.Controller("searchResults")
export class SearchResultController extends SearchResultControllerBase {
  constructor(protected readonly service: SearchResultService) {
    super(service);
  }
}
