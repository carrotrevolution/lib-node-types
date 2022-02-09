export enum RecipeConfigurationRef {
  SKILL_VIDEOS = 'skill-videos',
  FREE_RECIPES = 'free-recipes',
  FREE_RECIPES_EN_US = 'free-recipes-en-us',
  FREE_RECIPES_ROW = 'free-recipes-row',
  FREE_RECIPES_ROW_EN_US = 'free-recipes-row-en-us',
  CHALLENGES = 'challenges',
  OPEN_AVATARS = 'open-avatars',
}

export const RecipeConfigurationRefs = [
  RecipeConfigurationRef.SKILL_VIDEOS,
  RecipeConfigurationRef.FREE_RECIPES,
  RecipeConfigurationRef.FREE_RECIPES_EN_US,
  RecipeConfigurationRef.FREE_RECIPES_ROW,
  RecipeConfigurationRef.FREE_RECIPES_ROW_EN_US,
  RecipeConfigurationRef.CHALLENGES,
  RecipeConfigurationRef.OPEN_AVATARS,
];

export interface RecipeConfigurationOptions {
  refOrder: string[];
}

export interface RecipeConfiguration {
  id: string;
  ref: string;
  options: RecipeConfigurationOptions;
}

export interface CreateRecipeConfigurationInput {
  options?: RecipeConfigurationOptions;
}
