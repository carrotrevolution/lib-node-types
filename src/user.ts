/* eslint-disable no-control-regex */
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
  createdAt?: Date;
}

export abstract class UserValidators {
  static passwordPattern = /^.{8,255}$/;
  static emailPattern =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  static validPassword(password: string): boolean {
    return this.passwordPattern.test(password);
  }

  static validEmail(email: string): boolean {
    return this.emailPattern.test(email);
  }
}
