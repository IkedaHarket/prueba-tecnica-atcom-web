export interface Paginated<T>{
    items: T[],
    loading: boolean;
    error: boolean;
    rowsPerPage:number;
    totalItems: number;
  }