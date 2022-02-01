export enum SAVED_LIST_TYPE {
  FAVORITES = 'favorites',
}

export const SAVED_LIST_TYPES = [SAVED_LIST_TYPE.FAVORITES];

export enum SAVED_LIST_ITEM_TYPE {
  RECIPE = 'recipe',
}

export const SAVED_LIST_ITEM_TYPES = [SAVED_LIST_ITEM_TYPE.RECIPE];

interface SavedListItem {
  type: SAVED_LIST_ITEM_TYPE;
  ref: string;
}

export interface SavedList {
  id: string;
  userId: string;
  title?: string;
  type: SAVED_LIST_TYPE;
  items?: SavedListItem[];
}
