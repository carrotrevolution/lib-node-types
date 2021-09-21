export enum ShareMedium {
  DIRECT = 'direct',
  SHARE = 'share',
}

export enum ProductEnv {
  PRODUCTION = 'production',
}

export interface RecipeLog {
  id: string;
  type: string;
  userId: string;
  profileId: string;
  recipeRef?: string;
  challengeRef?: string;
  env?: string;
  metadata?: unknown;
  createdAt?: Date;
  updatedAt?: Date;
}
