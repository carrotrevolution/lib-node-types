export interface SearchInput {
  query?: string;
  filters?: string;
  page: number;
  hitsPerPage: number;
}

export interface SearchResult<T> {
  results?: T;
  page: number;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  isLastPage: boolean;
  query?: string;
  filters?: string;
  queryID?: string;
}
