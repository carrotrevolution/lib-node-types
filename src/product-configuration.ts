import {SupportedCurrency} from './currency';
import {DocumentStatusType} from './document';
import {SupportedLanguage} from './locale';
import {RevenueCatDuration} from './revenue-cat';
import {StripeCoupon, StripePrice} from './stripe';

export enum ProductConfigurationCategory {
  GIFT = 'gift',
  SUBSCRIPTION = 'subscription',
}

export const ProductConfigurationCategories = [
  ProductConfigurationCategory.GIFT,
  ProductConfigurationCategory.SUBSCRIPTION,
];

export interface ProductConfigurationProduct {
  id: string;
  productId: string;
  priceId: string;
  price?: StripePrice;
  freeTrialDays?: number;
  duration: RevenueCatDuration;
}

export interface ProductConfiguration {
  id: string;
  ref: string;
  status: DocumentStatusType;
  category: ProductConfigurationCategory;
  currencyCode?: SupportedCurrency;
  currencySymbol?: string;
  currencyUnitType?: number;
  couponId?: string;
  coupon?: StripeCoupon;
  expiresAt?: Date;
  products?: ProductConfigurationProduct[];
}

export interface CreateProductConfigurationProductInput {
  priceId: string;
  productId: string;
  duration: RevenueCatDuration;
  freeTrialDays?: number;
}

export interface CreateProductConfigurationInput {
  status?: DocumentStatusType;
  currencyCode?: SupportedCurrency;
  couponId?: string;
  expiresAt?: Date;
  products?: CreateProductConfigurationProductInput[];
  category?: ProductConfigurationCategory;
}

export interface CreateSubscriptionProductConfigurationCheckoutInput {
  ref: string;
  productId: string;
}

export interface CreateGiftProductConfigurationCheckoutInput {
  email: string;
  ref: string;
  productId: string;
  lang: SupportedLanguage;
  message?: string;
  backgroundImageURL?: string;
}
