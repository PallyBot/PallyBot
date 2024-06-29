import { InputJsonValue } from "../../types";
import { SearchQueryCreateNestedManyWithoutUsersInput } from "./SearchQueryCreateNestedManyWithoutUsersInput";
import { VoiceRecordingCreateNestedManyWithoutUsersInput } from "./VoiceRecordingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  searchQueries?: SearchQueryCreateNestedManyWithoutUsersInput;
  username: string;
  voiceRecordings?: VoiceRecordingCreateNestedManyWithoutUsersInput;
};
