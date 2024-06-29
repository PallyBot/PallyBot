import { JsonValue } from "type-fest";
import { SearchQuery } from "../searchQuery/SearchQuery";
import { VoiceRecording } from "../voiceRecording/VoiceRecording";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  searchQueries?: Array<SearchQuery>;
  updatedAt: Date;
  username: string;
  voiceRecordings?: Array<VoiceRecording>;
};
