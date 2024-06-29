import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoiceRecordingService } from "./voiceRecording.service";
import { VoiceRecordingControllerBase } from "./base/voiceRecording.controller.base";

@swagger.ApiTags("voiceRecordings")
@common.Controller("voiceRecordings")
export class VoiceRecordingController extends VoiceRecordingControllerBase {
  constructor(protected readonly service: VoiceRecordingService) {
    super(service);
  }
}
