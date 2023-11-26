export interface RequestRejected {
  detail: string;
  code?: string;
}

export interface ApiError {
  message: string;
  status: number | null;
}
