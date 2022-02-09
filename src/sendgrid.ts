import {SupportedLanguage} from './locale';

type SendgridListItem = {[lang in SupportedLanguage]: string};

export const SendgridList: {
  [id: string]: SendgridListItem;
} = {
  MARKETING: {
    [SupportedLanguage.FI]: 'b3c1d82f-e229-4fc7-af30-8fe1c62d02c5',
    [SupportedLanguage.EN]: 'b3c1d82f-e229-4fc7-af30-8fe1c62d02c5',
    [SupportedLanguage.EN_US]: 'b3c1d82f-e229-4fc7-af30-8fe1c62d02c5',
  },
  NEW_SUBSCRIBERS: {
    [SupportedLanguage.FI]: '0b7ae9bf-8b30-4187-9f92-d154354a0297',
    [SupportedLanguage.EN]: '170ed6f5-b886-4bf6-bab2-79c343bae8dd',
    [SupportedLanguage.EN_US]: '170ed6f5-b886-4bf6-bab2-79c343bae8dd',
  },
};
