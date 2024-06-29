import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoiceRecordingUpdateInput = {
  audioFile?: InputJsonValue;
  transcriptionText?: string | null;
  user?: UserWhereUniqueInput | null;
};
