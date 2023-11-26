import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectCitiesFilters = createSelector(
  [(state: RootState) => Object.entries(state.filters.cities)],
  (cities) => cities,
);

export const selectFormatFilters = createSelector(
  [(state: RootState) => Object.entries(state.filters.formats)],
  (formats) => formats,
);

export const selectRoleFilters = createSelector(
  [(state: RootState) => Object.entries(state.filters.roles)],
  (roles) => roles,
);

export const selectAllFilters = createSelector(
  [selectCitiesFilters, selectFormatFilters, selectRoleFilters],
  (cities, formats, roles) => ({
    cities,
    formats,
    roles,
  }),
);
