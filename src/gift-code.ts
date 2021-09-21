import {SupportedLanguage} from './locale';
import {RevenueCatDuration} from './revenue-cat';

export enum GiftCodeStatusType {
  WAITING = 'waiting',
  CLAIMED = 'claimed',
  DEACTIVATED = 'deactivated',
}

export const GiftCodeStatusTypes = [
  GiftCodeStatusType.CLAIMED,
  GiftCodeStatusType.WAITING,
  GiftCodeStatusType.DEACTIVATED,
];

export enum GiftCodeCategory {
  ADMIN = 'admin',
  GIFT_UNPAID = 'gift-unpaid',
  GIFT_PAID = 'gift-paid',
  UNDEFINED = 'undefined',
}

export const GiftCodeCategories = [
  GiftCodeCategory.ADMIN,
  GiftCodeCategory.GIFT_UNPAID,
  GiftCodeCategory.GIFT_PAID,
  GiftCodeCategory.UNDEFINED,
];

export interface GiftCode {
  id: string;
  claimerUserId: string;
  entitlementIds: string[];
  code: string;
  status?: GiftCodeStatusType;
  category?: GiftCodeCategory;
  duration?: RevenueCatDuration;
  lang?: SupportedLanguage;
  claimedAt?: Date;
  expiresAt?: Date;
  sendTo?: GiftCodeSendTo;
  downloadURL?: string;
  message?: string;
}

export interface GiftCodeSendTo {
  id: string;
  email: string;
  lang: string;
}
