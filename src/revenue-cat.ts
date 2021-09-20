export interface RevenueCatEventPayload {
  event: RevenueCatWebhookEvent;
  subscriber: RevenueCatSubscriber;
}

export enum RevenueCatDuration {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  TWO_MONTH = 'two_month',
  THREE_MONTH = 'three_month',
  SIX_MONTH = 'six_month',
  YEARLY = 'yearly',
  LIFETIME = 'lifetime',
}

export const RevenueCatDurations = [
  RevenueCatDuration.DAILY,
  RevenueCatDuration.WEEKLY,
  RevenueCatDuration.MONTHLY,
  RevenueCatDuration.TWO_MONTH,
  RevenueCatDuration.THREE_MONTH,
  RevenueCatDuration.SIX_MONTH,
  RevenueCatDuration.YEARLY,
  RevenueCatDuration.LIFETIME,
];

export enum RevenueCatWebhookEventType {
  TEST = 'TEST',
  INITIAL_PURCHASE = 'INITIAL_PURCHASE',
  NON_RENEWING_PURCHASE = 'NON_RENEWING_PURCHASE',
  RENEWAL = 'RENEWAL',
  PRODUCT_CHANGE = 'PRODUCT_CHANGE',
  CANCELLATION = 'CANCELLATION',
  BILLING_ISSUE = 'BILLING_ISSUE',
  SUBSCRIBER_ALIAS = 'SUBSCRIBER_ALIAS',
  UNCANCELLATION = 'UNCANCELLATION',
}

export enum RevenueCatPeriodType {
  TRIAL = 'TRIAL',
  INTRO = 'INTRO',
  NORMAL = 'NORMAL',
  PROMOTIONAL = 'PROMOTIONAL',
}

export const RevenueCatPeriodTypes = [
  RevenueCatPeriodType.INTRO,
  RevenueCatPeriodType.TRIAL,
  RevenueCatPeriodType.NORMAL,
  RevenueCatPeriodType.PROMOTIONAL,
];

export enum RevenueCatStore {
  PLAY_STORE = 'PLAY_STORE',
  APP_STORE = 'APP_STORE',
  STRIPE = 'STRIPE',
  MAC_APP_STORE = 'MAC_APP_STORE',
  PROMOTIONAL = 'PROMOTIONAL',
}

export const RevenueCatStores = [
  RevenueCatStore.APP_STORE,
  RevenueCatStore.MAC_APP_STORE,
  RevenueCatStore.PLAY_STORE,
  RevenueCatStore.PROMOTIONAL,
  RevenueCatStore.STRIPE,
];

export enum RevenueCatEnvironment {
  SANDBOX = 'SANDBOX',
  PRODUCTION = 'PRODUCTION',
}

export enum RevenueCatCancelReason {
  UNSUBSCRIBE = 'UNSUBSCRIBE',
  BILLING_ERROR = 'BILLING_ERROR',
  DEVELOPER_INITIATED = 'DEVELOPER_INITIATED',
  PRICE_INCREASE = 'PRICE_INCREASE',
  UNKNOWN = 'UNKNOWN',
  CUSTOMER_SUPPORT = 'CUSTOMER_SUPPORT',
}

export interface RevenueCatWebhookEvent {
  type: RevenueCatWebhookEventType;
  id: string;
  app_user_id: string;
  original_app_user_id: string;
  aliases: string[];
  entitlement_ids: string[];
  product_id: string;
  price: number;
  currency: string;
  price_in_purchased_currency: number;
  takehome_percentage: number;
  period_type: RevenueCatPeriodType;
  purchased_at_ms: number;
  expiration_at_ms: number;
  event_timestamp_ms: number;
  store: RevenueCatStore;
  environment: RevenueCatEnvironment;
  is_trial_conversion: boolean;
  cancel_reason: RevenueCatCancelReason;
  new_product_id: string;
  presented_offering_id: string;
  subscriber_attributes: unknown;
  transaction_id: string;
  original_transaction_id: string;
}

export interface RevenueCatEntitlement {
  expires_date: string;
  product_identifier: string;
  purchase_date: string;
}

export interface RevenueCatNonSubscription {
  id: string;
  is_sandbox: boolean;
  purchase_date: string;
  store: RevenueCatStore;
}

export interface RevenueCatSubscription {
  billing_issues_detected_at: string;
  expires_date: string;
  is_sandbox: boolean;
  original_purchase_date: string;
  period_type: RevenueCatPeriodType;
  purchase_date: string;
  store: RevenueCatStore;
  unsubscribe_detected_at: string;
}

export interface RevenueCatSubscriberEntitlements {
  [entitlementId: string]: RevenueCatEntitlement;
}

export interface RevenueCatSubscriberNonSubscriptions {
  [productId: string]: RevenueCatNonSubscription;
}

export interface RevenueCatSubscriberSubscriptions {
  [productId: string]: RevenueCatSubscription;
}

export interface RevenueCatSubscriber {
  entitlements: RevenueCatSubscriberEntitlements;
  first_seen: string;
  non_subscriptions: RevenueCatSubscriberNonSubscriptions;
  original_app_user_id: string;
  original_application_version: string;
  subscriptions: RevenueCatSubscriberSubscriptions;
}

export interface RevenueCatSubscriberResult {
  request_date: string;
  request_date_ms: number;
  subscriber: RevenueCatSubscriber;
}

export interface RevenueCatWebhook {
  event: RevenueCatWebhookEvent;
  api_version: string;
}
