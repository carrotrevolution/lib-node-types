export enum SupportedLanguage {
  EN = 'en',
  EN_US = 'en-us',
  FI = 'fi',
}

export const DefaultLanguage = SupportedLanguage.EN;

export const SupportedLanguages = [
  SupportedLanguage.EN,
  SupportedLanguage.EN_US,
  SupportedLanguage.FI,
];

export enum SupportedCountry {
  US = 'US',
  UK = 'UK',
  FI = 'FI',
}

export const SupportedCountries = [
  SupportedCountry.UK,
  SupportedCountry.US,
  SupportedCountry.FI,
];

export class LangHelper {
  static langOrDefault(lang: unknown, defaultLang = DefaultLanguage) {
    if (!this.isSupported(lang)) {
      return defaultLang;
    }
    return lang;
  }
  static isSupported(lang: unknown): boolean {
    return !!(lang && SupportedLanguages.some(l => l === lang));
  }
}
