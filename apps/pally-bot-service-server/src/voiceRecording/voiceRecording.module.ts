import { Module } from "@nestjs/common";
import { VoiceRecordingModuleBase } from "./base/voiceRecording.module.base";
import { VoiceRecordingService } from "./voiceRecording.service";
import { VoiceRecordingController } from "./voiceRecording.controller";
import { VoiceRecordingResolver } from "./voiceRecording.resolver";

@Module({
  imports: [VoiceRecordingModuleBase],
  controllers: [VoiceRecordingController],
  providers: [VoiceRecordingService, VoiceRecordingResolver],
  exports: [VoiceRecordingService],
})
export class VoiceRecordingModule {}
