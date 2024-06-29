import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OpenAiModuleService } from "./openaimodule.service";
import { VoiceRecordingDto } from "../openAiModule/VoiceRecordingDto";

@swagger.ApiTags("openAiModules")
@common.Controller("openAiModules")
export class OpenAiModuleController {
  constructor(protected readonly service: OpenAiModuleService) {}

  @common.Get("/:id/convert-voice-to-text")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConvertVoiceToText(
    @common.Body()
    body: VoiceRecordingDto
  ): Promise<string> {
        return this.service.ConvertVoiceToText(body);
      }

  @common.Post("/voice-to-text-conversion")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VoiceToTextConversion(
    @common.Body()
    body: VoiceRecordingDto
  ): Promise<string> {
        return this.service.VoiceToTextConversion(body);
      }
}
