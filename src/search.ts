export interface SearchInput {
  query?: string;
  filters?: string;
  page: number;
  hitsPerPage: number;
}

export interface SearchResultItem<T> {
  items?: T;
  queryID?: string;
}

export interface SearchResult<T> {
  results?: SearchResultItem<T>;
  page: number;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  isLastPage: boolean;
  queryID?: string;
}
