import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchQueryServiceBase } from "./base/searchQuery.service.base";

@Injectable()
export class SearchQueryService extends SearchQueryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
