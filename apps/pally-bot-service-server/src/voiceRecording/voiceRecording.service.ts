import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoiceRecordingServiceBase } from "./base/voiceRecording.service.base";

@Injectable()
export class VoiceRecordingService extends VoiceRecordingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
