import {DocumentStatusType} from './document';

export enum InfoNotificationType {
  WARNING = 'warning',
  INFO = 'info',
}

export const InfoNotificationTypes = [
  InfoNotificationType.WARNING,
  InfoNotificationType.INFO,
];

export interface InfoNotificationContent {
  id: string;
  bodyMD: string;
  title: string;
  lang: string;
  displayImageURL?: string;
}

export interface InfoNotification {
  id: string;
  type: InfoNotificationType;
  contents?: InfoNotificationContent[];
  content?: InfoNotificationContent;
  status: DocumentStatusType;
}

export interface CreateInfoNotificationContentInput {
  bodyMD?: string;
  title?: string;
  lang?: string;
  displayImageURL?: string;
}

export interface CreateInfoNotificationInput {
  type?: InfoNotificationType;
  contents?: CreateInfoNotificationContentInput[];
  status?: DocumentStatusType;
}
