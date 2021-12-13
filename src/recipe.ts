import {DocumentStatusType} from './document';
import {SupportedLanguage} from './locale';
import {SpecialDiet} from './special-diet';

export enum RecipeStepType {
  TIMER = 'timer',
  PERFORM = 'perform',
  CAMERA = 'camera',
  RATING = 'rating',
}

export const RecipeStepTypes = [
  RecipeStepType.PERFORM,
  RecipeStepType.TIMER,
  RecipeStepType.CAMERA,
  RecipeStepType.RATING,
];

export interface RecipeContent {
  id: string;
  title: string;
  lang: SupportedLanguage;
  ingredientsMD?: string;
  keywords?: string;
  ingredientsText?: string;
  previewImageURL?: string;
  previewVideoURL?: string;
}

export interface RecipeShopLink {
  id: string;
  title: string;
  lang: SupportedLanguage;
  shopURL: string;
}

export interface Recipe {
  id: string;
  contents: RecipeContent[];
  content?: RecipeContent;
  steps?: RecipeStep[];
  expReward: number;
  difficulty: number;
  timeEstimateMin: number;
  ref: string;
  status: DocumentStatusType;
  specialDietRefs?: string[];
  badgeRefs?: string[];
  specialDiets?: SpecialDiet[];
  isFree?: boolean;
  isChallenge?: boolean;
  isOpen?: boolean;
  shopLinks?: RecipeShopLink[];
  shopLink?: RecipeShopLink;
  challengeRef?: string;
  forVersion?: string;
  forLanguages?: string[];
  forCountries?: string[];
}

export interface CreateRecipeShopLinkInput {
  title: string;
  lang: SupportedLanguage;
  shopURL: string;
}

export interface CreateRecipeContentInput {
  title: string;
  lang: SupportedLanguage;
  ingredientsMD?: string;
  previewImageURL?: string;
}

export interface CreateRecipeInput {
  contents?: CreateRecipeContentInput[];
  steps?: CreateRecipeStepInput[];
  shopLinks?: CreateRecipeShopLinkInput[];
  expReward?: number;
  difficulty?: number;
  timeEstimateMin?: number;
  status?: string;
  specialDietRefs?: string[];
  badgeRefs?: string[];
  forVersion?: string;
  forLanguages?: string[];
  forCountries?: string[];
}

export interface RecipeStepContent {
  id: string;
  lang: SupportedLanguage;
  videoURL?: string;
  bodyMD?: string;
}

export interface RecipeStep {
  id: string;
  type: RecipeStepType;
  contents?: RecipeStepContent[];
  content?: RecipeStepContent;
  timerSec?: number;
  waitForTimer: boolean;
  skillVideoRefs?: string[];
}

export interface CreateRecipeStepContentInput {
  lang: SupportedLanguage;
  videoURL?: string;
  bodyMD?: string;
}

export interface CreateRecipeStepInput {
  type: RecipeStepType;
  contents?: CreateRecipeStepContentInput[];
  timerSec?: number;
  waitForTimer: boolean;
  skillVideoRefs?: string[];
}
