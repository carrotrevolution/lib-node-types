import {SupportedLanguage} from './locale';

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  emailConfirmed?: boolean;
  entitlements?: string[];
  role?: string;
  preferredLang?: SupportedLanguage;
}
