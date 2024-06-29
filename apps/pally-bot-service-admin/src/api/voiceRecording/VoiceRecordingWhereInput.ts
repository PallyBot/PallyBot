import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoiceRecordingWhereInput = {
  audioFile?: JsonFilter;
  id?: StringFilter;
  transcriptionText?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
