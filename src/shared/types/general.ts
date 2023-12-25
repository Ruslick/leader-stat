export interface RequestRejected {
  detail: string;
  code?: string;
}

export interface ApiError {
  message: string;
  status: number | null;
}
export type PaginationDTO<Response> = {
  count: number;
  next: string;
  previous: string;
  results: Response;
};
