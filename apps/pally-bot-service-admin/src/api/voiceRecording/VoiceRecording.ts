import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type VoiceRecording = {
  audioFile: JsonValue;
  createdAt: Date;
  id: string;
  transcriptionText: string | null;
  updatedAt: Date;
  user?: User | null;
};
