import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectHakatonSlice = (state: RootState) => state.hackaton;

export const selectHakatons = createSelector(
  [
    (state: RootState) => state.hackaton.loading,
    (state: RootState) => state.hackaton.success,
    (state: RootState) => state.hackaton.error,
    (state: RootState) => state.hackaton.hakatons,
  ],
  (loading, success, error, hakatons) => ({
    loading,
    success,
    error,
    hakatons,
  }),
);

export const selectActiveFilter = (state: RootState) =>
  state.hackaton.activeFilter;

export const selectHackatonsView = (state: RootState) =>
  state.hackaton.gridView;
