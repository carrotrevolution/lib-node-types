export interface RecipeRating {
  id: string;
  ref: string;
  userId: string;
  profileId: string;
  rating: number;
  comment?: string;
  lang?: string;
}

export interface RateRecipeInput {
  rating: number;
  comment?: string;
}
