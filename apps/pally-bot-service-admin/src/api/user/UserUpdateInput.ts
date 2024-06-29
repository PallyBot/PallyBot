import { InputJsonValue } from "../../types";
import { SearchQueryUpdateManyWithoutUsersInput } from "./SearchQueryUpdateManyWithoutUsersInput";
import { VoiceRecordingUpdateManyWithoutUsersInput } from "./VoiceRecordingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  searchQueries?: SearchQueryUpdateManyWithoutUsersInput;
  username?: string;
  voiceRecordings?: VoiceRecordingUpdateManyWithoutUsersInput;
};
