import {DocumentStatusType} from './document';
import {SupportedLanguage} from './locale';

export interface SkillVideoContent {
  id: string;
  lang: SupportedLanguage;
  title: string;
  videoURL: string;
  previewImageURL?: string;
}

export interface SkillVideo {
  id: string;
  status: DocumentStatusType;
  ref: string;
  contents?: SkillVideoContent[];
  content?: SkillVideoContent;
}

export interface CreateOrUpdateSkillVideoContentInput {
  lang: string;
  title: string;
  videoURL: string;
  previewImageURL: string;
}

export interface CreateSkillVideoInput {
  status?: DocumentStatusType;
  contents?: CreateOrUpdateSkillVideoContentInput[];
}
