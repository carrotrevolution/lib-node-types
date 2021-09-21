import {SupportedCurrency} from './currency';
import {DocumentStatusType} from './document';
import {StripeCoupon, StripePrice} from './stripe';

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
  status?: DocumentStatusType;
  currencyCode?: SupportedCurrency;
  couponId?: string;
  expiresAt?: Date;
  products?: CreateProductConfigurationProductParams[];
}
