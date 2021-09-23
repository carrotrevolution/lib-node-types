export interface RecipeRating {
  id: string;
  ref: string;
  userId: string;
  profileId: string;
  rating: number;
  comment?: string;
}

export interface RateRecipeInput {
  rating: number;
  comment?: string;
}
