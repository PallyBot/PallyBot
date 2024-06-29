import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchResultServiceBase } from "./base/searchResult.service.base";

@Injectable()
export class SearchResultService extends SearchResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
