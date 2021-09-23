export enum RecipeConfigurationRef {
  SKILL_VIDEOS = 'skill-videos',
  FREE_RECIPES = 'free-recipes',
  FREE_RECIPES_ROW = 'free-recipes-row',
  CHALLENGES = 'challenges',
  OPEN_AVATARS = 'open-avatars',
}

export const RecipeConfigurationRefs = [
  RecipeConfigurationRef.SKILL_VIDEOS,
  RecipeConfigurationRef.FREE_RECIPES,
  RecipeConfigurationRef.FREE_RECIPES_ROW,
  RecipeConfigurationRef.CHALLENGES,
  RecipeConfigurationRef.OPEN_AVATARS,
];

export interface RecipeConfigurationOptions {
  refOrder: string[];
}

export interface RecipeConfiguration {
  id: string;
  ref: RecipeConfigurationRef;
  options: RecipeConfigurationOptions;
}

export interface CreateRecipeConfigurationInput {
  options?: RecipeConfigurationOptions;
}
