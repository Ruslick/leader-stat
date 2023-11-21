import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectCitiesFilters = createSelector(
  [(state: RootState) => Object.entries(state.filters.cities)],
  (cities) => {
    return cities;
  },
);
