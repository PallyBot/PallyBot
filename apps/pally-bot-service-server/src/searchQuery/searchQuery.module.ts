import { Module } from "@nestjs/common";
import { SearchQueryModuleBase } from "./base/searchQuery.module.base";
import { SearchQueryService } from "./searchQuery.service";
import { SearchQueryController } from "./searchQuery.controller";
import { SearchQueryResolver } from "./searchQuery.resolver";

@Module({
  imports: [SearchQueryModuleBase],
  controllers: [SearchQueryController],
  providers: [SearchQueryService, SearchQueryResolver],
  exports: [SearchQueryService],
})
export class SearchQueryModule {}
