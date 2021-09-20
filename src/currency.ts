export enum SupportedCurrency {
  EUR = 'EUR',
  GBP = 'GBP',
}

export const SupportedCurrencies = [
  SupportedCurrency.EUR,
  SupportedCurrency.GBP,
];

export class CurrencyHelper {
  private static readonly CURRENCIES: {
    [key in SupportedCurrency]: {
      symbol: string;
      unitType: 100 | 1;
    };
  } = {
    [SupportedCurrency.EUR]: {
      symbol: '€',
      unitType: 100,
    },
    [SupportedCurrency.GBP]: {
      symbol: '£',
      unitType: 100,
    },
  };

  static currencyConfig(abb: SupportedCurrency) {
    const config = this.CURRENCIES[abb];
    if (!config) {
      throw new Error('Invalid currency!');
    }
    return config;
  }
}
