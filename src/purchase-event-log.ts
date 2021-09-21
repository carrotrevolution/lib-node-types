import {RevenueCatSubscriber, RevenueCatWebhookEvent} from './revenue-cat';

export interface PurchaseEventLog {
  id: string;
  userId: string;
  eventTimeAt?: Date;
  event?: RevenueCatWebhookEvent;
  subscriber?: RevenueCatSubscriber;
}
