import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectHackatonSlice = (state: RootState) => state.hackaton;

export const selectHackatons = createSelector(
  [
    (state: RootState) => state.hackaton.loading,
    (state: RootState) => state.hackaton.success,
    (state: RootState) => state.hackaton.error,
    (state: RootState) => state.hackaton.hackatons,
  ],
  (loading, success, error, hackatons) => ({
    loading,
    success,
    error,
    hackatons,
  }),
);

export const selectActiveFilter = (state: RootState) => state.hackaton.activeFilter;

export const selectHackatonsView = (state: RootState) => state.hackaton.gridView;
