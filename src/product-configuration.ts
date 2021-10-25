import {SupportedCurrency} from './currency';
import {DocumentStatusType} from './document';
import {StripeCoupon, StripePrice} from './stripe';

export enum ProductConfigurationCategory {
  GIFT = 'gift',
  SUBSCRIPTION = 'subscription',
}

export interface ProductConfigurationProduct {
  id: string;
  productId: string;
  priceId: string;
  price?: StripePrice;
  freeTrialDays?: number;
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
