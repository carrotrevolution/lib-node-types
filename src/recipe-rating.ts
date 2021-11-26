import {SupportedLanguage} from './locale';

export interface RecipeRating {
  id: string;
  ref: string;
  userId: string;
  profileId: string;
  rating: number;
  comment?: string;
  lang?: SupportedLanguage;
}

export interface RateRecipeInput {
  rating: number;
  comment?: string;
}
