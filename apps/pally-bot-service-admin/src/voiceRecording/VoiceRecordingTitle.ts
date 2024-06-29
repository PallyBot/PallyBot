import { VoiceRecording as TVoiceRecording } from "../api/voiceRecording/VoiceRecording";

export const VOICERECORDING_TITLE_FIELD = "id";

export const VoiceRecordingTitle = (record: TVoiceRecording): string => {
  return record.id?.toString() || String(record.id);
};
