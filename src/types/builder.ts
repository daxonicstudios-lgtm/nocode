// Types for the AI app builder system

export interface ProjectFile {
  id: string;
  project_id: string;
  path: string;
  content: string;
  version: number;
  updated_at: string;
}

export interface ConversationMessage {
  id: string;
  project_id: string;
  role: "user" | "assistant" | "system";
  content: string;
  file_changes: FileChange[];
  credits_used: number;
  created_at: string;
}

export interface FileChange {
  path: string;
  action: "create" | "update" | "delete";
}

export interface ProjectVersion {
  id: string;
  project_id: string;
  message_id: string | null;
  snapshot: Record<string, string>; // path → content
  description: string | null;
  created_at: string;
}

export interface UserCredits {
  id: string;
  user_id: string;
  balance: number;
  lifetime_used: number;
  updated_at: string;
}

export interface CreditTransaction {
  id: string;
  user_id: string;
  amount: number;
  reason: "generation" | "purchase" | "signup_bonus" | "daily_bonus";
  message_id: string | null;
  created_at: string;
}

export type BuilderPanel = "chat" | "code" | "preview";

export type DeviceFrame = "mobile" | "tablet" | "desktop";

/** SSE event types from /api/generate */
export type GenerateEventType = "token" | "file" | "done" | "error";

export interface GenerateTokenEvent {
  type: "token";
  content: string;
}

export interface GenerateFileEvent {
  type: "file";
  path: string;
  content: string;
}

export interface GenerateDoneEvent {
  type: "done";
  creditsUsed: number;
  versionId: string;
  filesChanged: string[];
}

export interface GenerateErrorEvent {
  type: "error";
  message: string;
}

export type GenerateEvent =
  | GenerateTokenEvent
  | GenerateFileEvent
  | GenerateDoneEvent
  | GenerateErrorEvent;
