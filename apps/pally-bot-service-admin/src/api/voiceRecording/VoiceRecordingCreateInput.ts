import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoiceRecordingCreateInput = {
  audioFile?: InputJsonValue;
  transcriptionText?: string | null;
  user?: UserWhereUniqueInput | null;
};
