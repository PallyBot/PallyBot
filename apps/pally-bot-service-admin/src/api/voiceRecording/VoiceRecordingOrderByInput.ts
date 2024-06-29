import { SortOrder } from "../../util/SortOrder";

export type VoiceRecordingOrderByInput = {
  audioFile?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  transcriptionText?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
