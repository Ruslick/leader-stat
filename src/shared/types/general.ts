export interface RequestRejected {
  detail: string;
  code?: string;
}

export interface ApiError {
  message: string;
  status: number | null;
}

export interface Paginated<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}
