import {ClientPlatform} from './client-platform';
import {GiftCodeCategory} from './gift-code';
import {RevenueCatDuration, RevenueCatStore} from './revenue-cat';

export interface CustomerIdentitySubscription {
  id: string;
  hasPremium: boolean;
  entitlements?: string[];
  hasActiveTrial: boolean;
  trialStartAt?: Date;
  trialEndAt?: Date;
  hasCancelledTrial: boolean;
  trialCancelledAt?: Date;
  hasActivePromotional: boolean;
  promotionalStartAt?: Date;
  promotionalEndAt?: Date;
  promotionalPeriod?: RevenueCatDuration;
  hasActiveSubscription: boolean;
  subscriptionStartAt?: Date;
  nextSubscriptionPaymentAt?: Date;
  hasCancelledSubscription: boolean;
  subscriptionEndAt?: Date;
  subscriptionStore?: RevenueCatStore;
  subscriptionPeriod?: RevenueCatDuration;
  subscriptionCancelledAt?: Date;
  lastCurrency?: string;
}

export interface CustomerIdentitySubscriptionInput {
  hasPremium: boolean;
  entitlements?: string[];
  hasActiveTrial: boolean;
  trialStartAt?: Date;
  trialEndAt?: Date;
  hasCancelledTrial: boolean;
  trialCancelledAt?: Date;
  hasActivePromotional: boolean;
  promotionalStartAt?: Date;
  promotionalEndAt?: Date;
  promotionalPeriod?: RevenueCatDuration;
  hasActiveSubscription: boolean;
  subscriptionStartAt?: Date;
  nextSubscriptionPaymentAt?: Date;
  hasCancelledSubscription: boolean;
  subscriptionEndAt?: Date;
  subscriptionStore?: RevenueCatStore;
  subscriptionPeriod?: RevenueCatDuration;
  subscriptionCancelledAt?: Date;
  lastCurrency?: string;
}

export interface CustomerIdentityDevice {
  id: string;
  lastCountry?: string;
  lastCity?: string;
  tabletUser: boolean;
  phoneUser: boolean;
  iOSUser: boolean;
  lastIOSTokenAt?: Date;
  androidUser: boolean;
  lastAndroidTokenAt?: Date;
  webUser: boolean;
  lastWebTokenAt?: Date;
  lastTokenPlatform?: ClientPlatform;
  lastTokenAt?: Date;
  lastAppTokenPlatform?: ClientPlatform;
  lastAppTokenAt?: Date;
  signUpPlatform?: ClientPlatform;
  lastAppVersion?: string;
}

export interface CustomerIdentityDeviceInput {
  lastCountry?: string;
  lastCity?: string;
  tabletUser: boolean;
  phoneUser: boolean;
  iOSUser: boolean;
  lastIOSTokenAt?: Date;
  androidUser: boolean;
  lastAndroidTokenAt?: Date;
  webUser: boolean;
  lastWebTokenAt?: Date;
  lastTokenPlatform: ClientPlatform;
  lastTokenAt?: Date;
  lastAppTokenPlatform: ClientPlatform;
  lastAppTokenAt?: Date;
  signUpPlatform: ClientPlatform;
  lastAppVersion?: string;
}

export interface CustomerIdentityGift {
  id: string;
  hasClaimedGift: boolean;
  lastClaimedGiftCode?: string;
  lastClaimedGiftCategory?: GiftCodeCategory;
  lastGiftClaimedAt?: Date;
}

export interface CustomerIdentityGiftInput {
  hasClaimedGift: boolean;
  lastClaimedGiftCode?: string;
  lastClaimedGiftCategory?: GiftCodeCategory;
  lastGiftClaimedAt?: Date;
}

export interface CustomerIdentityProfile {
  id: string;
  hasCreatedProfile: boolean;
  profileCreatedAt?: Date;
}

export interface CustomerIdentityProfileInput {
  hasCreatedProfile: boolean;
  profileCreatedAt?: Date;
}

export interface CustomerIdentityAccount {
  id: string;
  email: string;
  emailConfirmed: boolean;
  firstName?: string;
  preferredLang?: string;
  createdAt?: Date;
}

export interface CustomerIdentityAccountInput {
  email: string;
  emailConfirmed: boolean;
  preferredLang?: string;
  firstName?: string;
  createdAt?: Date;
}

export interface CustomerIdentityCooking {
  id: string;
  hasCooked: boolean;
  lastCookedAt?: Date;
  totalCooked?: number;
}

export interface CustomerIdentityCookingInput {
  hasCooked: boolean;
  lastCookedAt?: Date;
  totalCooked: number;
}

export interface CustomerIdentityComeback {
  id: string;
  hasReturned: boolean;
  lastReturnAt?: Date;
}

export interface CustomerIdentityComebackInput {
  hasReturned: boolean;
  lastReturnAt?: Date;
}

export interface CustomerIdentityShare {
  id: string;
  hasShared: boolean;
  lastSharedAt?: Date;
}

export interface CustomerIdentityShareInput {
  hasShared: boolean;
  lastSharedAt?: Date;
}

export interface CustomerIdentity {
  id: string;
  userId: string;
  subscription?: CustomerIdentitySubscription;
  device?: CustomerIdentityDevice;
  profile?: CustomerIdentityProfile;
  account?: CustomerIdentityAccount;
  cooking?: CustomerIdentityCooking;
  share?: CustomerIdentityShare;
  comeback?: CustomerIdentityComeback;
  gift?: CustomerIdentityGift;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CustomerIdentityInput {
  subscription?: CustomerIdentitySubscriptionInput;
  device?: CustomerIdentityDeviceInput;
  profile?: CustomerIdentityProfileInput;
  account?: CustomerIdentityAccountInput;
  cooking?: CustomerIdentityCookingInput;
  share?: CustomerIdentityShareInput;
  comeback?: CustomerIdentityComebackInput;
  gift?: CustomerIdentityGiftInput;
}
