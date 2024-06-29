import { VoiceRecordingWhereInput } from "./VoiceRecordingWhereInput";
import { VoiceRecordingOrderByInput } from "./VoiceRecordingOrderByInput";

export type VoiceRecordingFindManyArgs = {
  where?: VoiceRecordingWhereInput;
  orderBy?: Array<VoiceRecordingOrderByInput>;
  skip?: number;
  take?: number;
};
