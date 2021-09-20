import {SupportedLanguage} from './locale';

export interface AvatarContent {
  id: string;
  lang: SupportedLanguage;
  title: string;
  imageURL: string;
}

export interface Avatar {
  id: string;
  status: string;
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
  status?: string;
  forVersion?: string;
  contents?: CreateOrUpdateAvatarContentParams[];
}
