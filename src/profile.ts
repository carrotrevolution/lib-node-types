import {Avatar} from './avatar';
import {DocumentStatusType} from './document';

export interface ProfileStats {
  id: string;
  level?: number;
  totalExp?: number;
  levelExp?: number;
  requiredLevelExp?: number;
  cookedRecipes?: number;
  levelTitle?: string;
  nextLevelTitle?: string;
  isMaxLevel?: boolean;
}

export interface Profile {
  id: string;
  userId: string;
  status: DocumentStatusType;
  displayName: string;
  character: string;
  stats?: ProfileStats;
  createdAt?: Date;
  updatedAt?: Date;
  characterAvatar?: Avatar;
}

export interface ProfileInput {
  displayName?: string;
  character?: string;
  status?: DocumentStatusType;
}
