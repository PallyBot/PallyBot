import { Module } from "@nestjs/common";
import { SearchResultModuleBase } from "./base/searchResult.module.base";
import { SearchResultService } from "./searchResult.service";
import { SearchResultController } from "./searchResult.controller";
import { SearchResultResolver } from "./searchResult.resolver";

@Module({
  imports: [SearchResultModuleBase],
  controllers: [SearchResultController],
  providers: [SearchResultService, SearchResultResolver],
  exports: [SearchResultService],
})
export class SearchResultModule {}
