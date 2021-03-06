import {ChallengeStatus} from './challenge-status';
import {DocumentStatusType} from './document';
import {SupportedLanguage} from './locale';
import {Recipe} from './recipe';
import {RewardType} from './reward';

export interface ChallengeRewardConfig {
  recipeRef?: string;
  avatarRef?: string;
}

export enum ChallengeTaskType {
  N_OF_RECIPES = 'n-of-recipes',
  N_OF_APP_SHARES = 'n-of-app-shares',
}
export const ChallengeTaskTypes = [
  ChallengeTaskType.N_OF_RECIPES,
  ChallengeTaskType.N_OF_APP_SHARES,
];

export interface ChallengeTaskConfig {
  recipeRefs?: string[];
  amountToComplete?: number;
}

export enum ChallengeActionEvent {
  RECIPE_COOKED = 'recipe-cooked',
  APP_SHARED = 'app-shared',
}

export interface ChallengeAction {
  event: ChallengeActionEvent;
  recipeRef?: string;
}

export interface ChallengeContent {
  id: string;
  title?: string;
  rewardTitle?: string;
  bodyMD?: string;
  previewImageURL?: string;
  lang: SupportedLanguage;
}

export interface ChallengeReward {
  id: string;
  type?: RewardType;
  config?: ChallengeRewardConfig;
  recipe?: Recipe;
}

export interface ChallengeTask {
  id: string;
  ref?: string;
  type?: ChallengeTaskType;
  config?: ChallengeTaskConfig;
  recipes?: Recipe[];
}

export interface Challenge {
  id: string;
  ref: string;
  status?: DocumentStatusType;
  myStatus?: ChallengeStatus;
  reward?: ChallengeReward;
  tasks?: ChallengeTask[];
  contents?: ChallengeContent[];
  content?: ChallengeContent;
  forVersion?: string;
  forLanguages?: string[];
  forCountries?: string[];
}

export interface CreateChallengeContentInput {
  title: string;
  bodyMD: string;
  rewardTitle: string;
  lang: SupportedLanguage;
  previewImageURL: string;
}

export interface CreateChallengeRewardInput {
  type: RewardType;
  config: ChallengeRewardConfig;
}

export interface CreateChallengeTaskInput {
  ref: string;
  type: ChallengeTaskType;
  config: ChallengeTaskConfig;
}

export interface CreateChallengeInput {
  status?: DocumentStatusType;
  reward?: CreateChallengeRewardInput;
  tasks?: CreateChallengeTaskInput[];
  contents?: CreateChallengeContentInput[];
  forVersion?: string;
  forLanguages?: string[];
  forCountries?: string[];
}
