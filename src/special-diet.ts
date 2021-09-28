import {SupportedLanguage} from './locale';

export enum SpecialDietType {
  DAIRY_FREE = 'dairy-free',
  GLUTEN_FREE = 'gluten-free',
  NUT_FREE = 'nut-free',
  VEGAN = 'vegan',
  VEGETARIAN = 'vegetarian',
}

export const SpecialDietTypes = [
  SpecialDietType.DAIRY_FREE,
  SpecialDietType.GLUTEN_FREE,
  SpecialDietType.NUT_FREE,
  SpecialDietType.VEGAN,
  SpecialDietType.VEGETARIAN,
];

export interface SpecialDietContent {
  lang: SupportedLanguage;
  title: string;
}

export interface SpecialDiet {
  ref: string;
  iconURL: string;
  freeOf: boolean;
  contents?: SpecialDietContent[];
  content?: SpecialDietContent;
}
