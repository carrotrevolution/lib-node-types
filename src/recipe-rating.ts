export interface RecipeRating {
  id: string;
  ref: string;
  userId: string;
  profileId: string;
  rating: number;
  comment?: string;
}

export interface RateRecipeParams {
  rating: number;
  comment?: string;
}
