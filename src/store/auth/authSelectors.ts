import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectAuth = createSelector(
  [
    (state: RootState) => state.auth.loading,
    (state: RootState) => state.auth.success,
    (state: RootState) => state.auth.error,
  ],
  (loading, success, error) => ({
    loading,
    success,
    error,
  }),
);
