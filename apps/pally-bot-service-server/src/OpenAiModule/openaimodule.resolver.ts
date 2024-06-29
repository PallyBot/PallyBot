import * as graphql from "@nestjs/graphql";
import { VoiceRecordingDto } from "../openAiModule/VoiceRecordingDto";
import { OpenAiModuleService } from "./openaimodule.service";

export class OpenAiModuleResolver {
  constructor(protected readonly service: OpenAiModuleService) {}

  @graphql.Query(() => String)
  async ConvertVoiceToText(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConvertVoiceToText(args);
  }

  @graphql.Mutation(() => String)
  async VoiceToTextConversion(
    @graphql.Args()
    args: VoiceRecordingDto
  ): Promise<string> {
    return this.service.VoiceToTextConversion(args);
  }
}
