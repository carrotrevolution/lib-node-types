export enum RewardType {
  RECIPE = 'recipe',
  AVATAR = 'avatar',
}
export const RewardTypes = [RewardType.RECIPE, RewardType.AVATAR];

export enum RewardStatus {
  CHALLENGE_UNLOCKED = 'challenge-unlocked',
}

export const RewardStatuses = [RewardStatus.CHALLENGE_UNLOCKED];

export interface Reward {
  id: string;
  profileId: string;
  userId: string;
  itemRef: string;
  status: RewardStatus;
  type: RewardType;
}
