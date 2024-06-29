import { Module } from "@nestjs/common";
import { OpenAiModuleService } from "./openaimodule.service";
import { OpenAiModuleController } from "./openaimodule.controller";
import { OpenAiModuleResolver } from "./openaimodule.resolver";

@Module({
  controllers: [OpenAiModuleController],
  providers: [OpenAiModuleService, OpenAiModuleResolver],
  exports: [OpenAiModuleService],
})
export class OpenAiModuleModule {}
