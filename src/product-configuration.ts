import {SupportedCurrency} from './currency';
import {StripeCoupon, StripePrice} from './stripe';

export enum ProductConfigurationStatus {
  ACTIVE = 'active',
  REMOVED = 'removed',
}

export const ProductConfigurationStatuses = [
  ProductConfigurationStatus.ACTIVE,
  ProductConfigurationStatus.REMOVED,
];

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
  status: ProductConfigurationStatus;
  currencyCode?: SupportedCurrency;
  currencySymbol?: string;
  currencyUnitType?: number;
  couponId?: string;
  coupon?: StripeCoupon;
  expiresAt?: Date;
  products?: ProductConfigurationProduct[];
}

export interface CreateProductConfigurationProductParams {
  priceId: string;
  productId: string;
  freeTrialDays?: number;
}

export interface CreateProductConfigurationParams {
  status?: ProductConfigurationStatus;
  currencyCode?: SupportedCurrency;
  couponId?: string;
  expiresAt?: Date;
  products?: CreateProductConfigurationProductParams[];
}
