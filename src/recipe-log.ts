/* eslint-disable @typescript-eslint/no-explicit-any */

import {ProductEnv} from './env';

export enum ShareMedium {
  DIRECT = 'direct',
  SHARE = 'share',
}

export enum RecipeLogType {
  STEP = 'step',
  COMPLETE = 'complete',
  WANT_TO_COOK = 'want-to-cook',
  APP_SHARE = 'app-share',
}

export const RecipeLogTypes = [
  RecipeLogType.STEP,
  RecipeLogType.COMPLETE,
  RecipeLogType.WANT_TO_COOK,
  RecipeLogType.APP_SHARE,
];

export interface RecipeLog {
  id: string;
  type: RecipeLogType;
  userId: string;
  profileId: string;
  recipeRef?: string;
  challengeRef?: string;
  env?: ProductEnv;
  metadata?: any;
  createdAt?: Date;
  updatedAt?: Date;
}
