import axios, { AxiosError } from "axios";

import { ApiError, RequestRejected } from "../types/general";

export const createError = (
  message: ApiError["message"],
  status?: ApiError["status"],
) => {
  return { message, status: status || null };
};

export const isApiError = (error: unknown): error is ApiError => {
  return "message" in (error as ApiError) && "status" in (error as ApiError);
};

export const createErrorFromAxiosError = (
  error: AxiosError<RequestRejected>,
) => {
  return createError(
    error.response?.data.detail || error.message,
    error.response?.status,
  );
};

export const handleAxiosError = (error: unknown, name: string) => {
  if (isApiError(error)) {
    return error;
  }
  if (axios.isAxiosError(error)) {
    return createErrorFromAxiosError(error);
  }
  // if it's not axios error
  return createError(name);
};
