export type StripeCouponDuration = 'forever' | 'once' | 'repeating';
export type StripePriceRecurringInterval = 'day' | 'month' | 'week' | 'year';
export type StripePriceType = 'one_time' | 'recurring';

export interface StripeCouponAppliesTo {
  productIds?: string[];
}

export interface StripeCoupon {
  id: string;
  valid: boolean;
  duration: StripeCouponDuration;
  appliesTo?: StripeCouponAppliesTo;
  metadata?: unknown;
  percentOff?: number;
}

export interface CreateStripeCouponParams {
  duration: StripeCouponDuration;
  productIds: string[];
  percentOff: number;
}

export interface StripePriceRecurring {
  interval: StripePriceRecurringInterval;
  intervalCount: number;
}

export interface StripePrice {
  id: string;
  active: boolean;
  currencyCode: string;
  metadata?: unknown;
  productId: string;
  recurring?: StripePriceRecurring;
  type: StripePriceType;
  unitAmount?: number;
}

export interface CreateStripePriceParams {
  currencyCode: string;
  productId: string;
  months: number;
  unitAmount: number;
}

export interface StripeCustomerPortal {
  id: string;
  portalURL: string;
  cancelURL: string;
  plansURL: string;
  updatePaymentMethodURL: string;
}

export interface StripeCustomer {
  id: string;
  userId: string;
  status: string;
  customerId?: string;
  subscriptionId?: string;
  checkoutSessionId?: string;
  cancelAtPeriodEnd?: boolean;
}
