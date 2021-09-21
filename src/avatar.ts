import {SupportedLanguage} from './locale';

export enum AvatarStatusType {
  ACTIVE = 'active',
  REMOVED = 'removed',
}

export const AvatarStatusTypes = [
  AvatarStatusType.ACTIVE,
  AvatarStatusType.REMOVED,
];

export interface AvatarContent {
  id: string;
  lang: SupportedLanguage;
  title: string;
  imageURL: string;
}

export interface Avatar {
  id: string;
  status: AvatarStatusType;
  ref: string;
  forVersion?: string;
  contents?: AvatarContent[];
  content?: AvatarContent;
}

export interface CreateOrUpdateAvatarContentParams {
  lang: string;
  title: string;
  imageURL: string;
}

export interface CreateAvatarParams {
  status?: AvatarStatusType;
  forVersion?: string;
  contents?: CreateOrUpdateAvatarContentParams[];
}
