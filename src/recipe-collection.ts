import {DocumentStatusType} from './document';
import {SupportedLanguage} from './locale';
import {Recipe} from './recipe';

export interface RecipeCollectionElementContent {
  id: string;
  lang: SupportedLanguage;
  title: string;
}

export interface RecipeCollectionElement {
  id: string;
  recipeRefs?: string[];
  recipes?: Recipe[];
  contents?: RecipeCollectionElementContent[];
  content?: RecipeCollectionElementContent;
  backgroundColor?: string;
  titleColor?: string;
  forVersion?: string;
  forCountries?: string[];
  forLanguages?: string[];
}

export interface RecipeCollection {
  id: string;
  ref: string;
  elements?: RecipeCollectionElement[];
  status: DocumentStatusType;
}

export interface CreateCollectionElementParams {
  recipeRefs: string[];
  contents: CreateCollectionElementContentParams[];
  backgroundColor?: string;
  titleColor?: string;
  forVersion?: string;
  forCountries?: string[];
  forLanguages?: string[];
}

export interface CreateCollectionParams {
  elements?: CreateCollectionElementParams[];
  status?: DocumentStatusType;
}

export interface CreateCollectionElementContentParams {
  lang: SupportedLanguage;
  title: string;
}
