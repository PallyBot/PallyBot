import * as graphql from "@nestjs/graphql";
import { VoiceRecordingResolverBase } from "./base/voiceRecording.resolver.base";
import { VoiceRecording } from "./base/VoiceRecording";
import { VoiceRecordingService } from "./voiceRecording.service";

@graphql.Resolver(() => VoiceRecording)
export class VoiceRecordingResolver extends VoiceRecordingResolverBase {
  constructor(protected readonly service: VoiceRecordingService) {
    super(service);
  }
}
