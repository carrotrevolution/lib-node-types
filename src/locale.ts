export enum SupportedLanguage {
  EN = 'en',
  FI = 'fi',
}

export const DefaultLanguage = SupportedLanguage.EN;

export const SupportedLanguages = [SupportedLanguage.EN, SupportedLanguage.FI];

export enum SupportedCountry {
  FI = 'FI',
}

export const SupportedCountries = [SupportedCountry.FI];

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
