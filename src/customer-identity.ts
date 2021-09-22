import {ClientPlatform} from './client-platform';
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
}

export interface CustomerIdentitySubscriptionParmas {
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

export interface CustomerIdentityDeviceParams {
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

export interface CustomerIdentityProfile {
  id: string;
  hasCreatedProfile: boolean;
  profileCreatedAt?: Date;
}

export interface CustomerIdentityProfileParams {
  hasCreatedProfile: boolean;
  profileCreatedAt?: Date;
}

export interface CustomerIdentityAccount {
  id: string;
  email: string;
  emailConfirmed: boolean;
  firstName?: string;
  preferredLang?: string;
}

export interface CustomerIdentityAccountParams {
  email: string;
  emailConfirmed: boolean;
  preferredLang?: string;
  firstName?: string;
}

export interface CustomerIdentityCooking {
  id: string;
  hasCooked: boolean;
  lastCookedAt?: Date;
  totalCooked?: number;
}

export interface CustomerIdentityCookingParams {
  hasCooked: boolean;
  lastCookedAt?: Date;
  totalCooked: number;
}

export interface CustomerIdentityComeback {
  id: string;
  hasReturned: boolean;
  lastReturnAt?: Date;
}

export interface CustomerIdentityComebackParams {
  hasReturned: boolean;
  lastReturnAt?: Date;
}

export interface CustomerIdentityShare {
  id: string;
  hasShared: boolean;
  lastSharedAt?: Date;
}

export interface CustomerIdentityShareParams {
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
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CustomerIdentityParams {
  subscription?: CustomerIdentitySubscriptionParmas;
  device?: CustomerIdentityDeviceParams;
  profile?: CustomerIdentityProfileParams;
  account?: CustomerIdentityAccountParams;
  cooking?: CustomerIdentityCookingParams;
  share?: CustomerIdentityShareParams;
  comeback?: CustomerIdentityComebackParams;
}
