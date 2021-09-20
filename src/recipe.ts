import {SupportedLanguage} from './locale';
import {SpecialDiet} from './special-diet';

export interface RecipeContent {
  id: string;
  title: string;
  lang: SupportedLanguage;
  ingredientsMD?: string;
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
  status: string;
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

export interface CreateRecipeShopLinkParams {
  title: string;
  lang: SupportedLanguage;
  shopURL: string;
}

export interface CreateRecipeContentParams {
  title: string;
  lang: SupportedLanguage;
  ingredientsMD?: string;
  previewImageURL?: string;
}

export interface CreateRecipeParams {
  contents?: CreateRecipeContentParams[];
  steps?: CreateRecipeStepParams[];
  shopLinks?: CreateRecipeShopLinkParams[];
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
  type: string;
  contents?: RecipeStepContent[];
  content?: RecipeStepContent;
  timerSec?: number;
  waitForTimer: boolean;
  skillVideoRefs?: string[];
}

export interface CreateRecipeStepContentParams {
  lang: SupportedLanguage;
  videoURL?: string;
  bodyMD?: string;
}

export interface CreateRecipeStepParams {
  type: string;
  contents?: CreateRecipeStepContentParams[];
  timerSec?: number;
  waitForTimer: boolean;
  skillVideoRefs?: string[];
}
