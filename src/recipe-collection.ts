import {DocumentStatusType} from './document';
import {SupportedLanguage} from './locale';
import {Recipe} from './recipe';

export interface RecipeCollectionElementContent {
  id: string;
  lang: SupportedLanguage;
  title: string;
  subtitle?: string;
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

export interface CreateCollectionElementInput {
  recipeRefs: string[];
  contents: CreateCollectionElementContentInput[];
  backgroundColor?: string;
  titleColor?: string;
  forVersion?: string;
  forCountries?: string[];
  forLanguages?: string[];
}

export interface CreateCollectionInput {
  elements?: CreateCollectionElementInput[];
  status?: DocumentStatusType;
}

export interface CreateCollectionElementContentInput {
  lang: SupportedLanguage;
  title: string;
  subtitle?: string;
}
