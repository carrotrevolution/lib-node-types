import {DocumentStatusType} from './document';

export interface InfoNotificationContent {
  id: string;
  bodyMD: string;
  title: string;
  lang: string;
  displayImageURL?: string;
}

export interface InfoNotification {
  id: string;
  type: string;
  contents?: InfoNotificationContent[];
  content?: InfoNotificationContent;
  status: DocumentStatusType;
}

export interface CreateInfoNotificationContentParams {
  bodyMD?: string;
  title?: string;
  lang?: string;
  displayImageURL?: string;
}

export interface CreateInfoNotificationParams {
  type?: string;
  contents?: CreateInfoNotificationContentParams[];
  status?: DocumentStatusType;
}
