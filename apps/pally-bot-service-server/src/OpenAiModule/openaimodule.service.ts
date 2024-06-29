import { Injectable } from "@nestjs/common";
import { VoiceRecordingDto } from "../openAiModule/VoiceRecordingDto";

@Injectable()
export class OpenAiModuleService {
  constructor() {}
  async ConvertVoiceToText(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async VoiceToTextConversion(args: VoiceRecordingDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
