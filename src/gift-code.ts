import {SupportedLanguage} from './locale';
import {RevenueCatDuration} from './revenue-cat';

export interface GiftCode {
  id: string;
  claimerUserId: string;
  entitlementIds: string[];
  code: string;
  status?: string;
  category?: string;
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
