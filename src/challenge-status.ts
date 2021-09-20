export interface ChallengeStatusTaskMetadata {
  completedRecipeRefs?: string[];
  sharesAmount?: number;
}

export enum ChallengeStatusStatus {
  COMPLETE = 'complete',
  NOT_STARTED = 'not-started',
  STARTED = 'started',
}

export const ChallengeStatusStatuses = [
  ChallengeStatusStatus.COMPLETE,
  ChallengeStatusStatus.NOT_STARTED,
  ChallengeStatusStatus.STARTED,
];

export enum ChallengeStatusTaskStatus {
  COMPLETE = 'complete',
  INCOMPLETE = 'incomplete',
}

export const ChallengeStatusTaskStatuses = [
  ChallengeStatusTaskStatus.COMPLETE,
  ChallengeStatusTaskStatus.INCOMPLETE,
];

export enum ChallengeStatusUpdateEvent {
  COMPLETED = 'completed',
  ALREADY_COMPLETED = 'already-completed',
  IMPROVED = 'improved',
}

export interface ChallengeStatusTask {
  id: string;
  taskRef: string;
  status: ChallengeStatusTaskStatus;
  metadata: ChallengeStatusTaskMetadata;
}

export interface ChallengeStatus {
  id: string;
  profileId: string;
  userId: string;
  challengeRef: string;
  status: ChallengeStatusStatus;
  tasks: ChallengeStatusTask[];
}

export interface ChallengeStatusUpdateEventPayload {
  old: ChallengeStatus;
  new: ChallengeStatus;
  event: ChallengeStatusUpdateEvent;
}
