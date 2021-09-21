import {DocumentStatusType} from './document';
import {SupportedLanguage} from './locale';

export interface AvatarContent {
  id: string;
  lang: SupportedLanguage;
  title: string;
  imageURL: string;
}

export interface Avatar {
  id: string;
  status: DocumentStatusType;
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
  status?: DocumentStatusType;
  forVersion?: string;
  contents?: CreateOrUpdateAvatarContentParams[];
}
