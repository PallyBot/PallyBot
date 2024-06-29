import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SearchQueryListRelationFilter } from "../searchQuery/SearchQueryListRelationFilter";
import { VoiceRecordingListRelationFilter } from "../voiceRecording/VoiceRecordingListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  searchQueries?: SearchQueryListRelationFilter;
  username?: StringFilter;
  voiceRecordings?: VoiceRecordingListRelationFilter;
};
