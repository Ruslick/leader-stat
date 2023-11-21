import { createSlice } from "@reduxjs/toolkit";

interface FiltersState {
  cities: {
    [key: string]: boolean;
  };
}

const initialState: FiltersState = {
  cities: { Волгоград: false, Москва: false, "Санкт-Петербург": false, "Екатеринбург": false, "Нижний Новгород": false },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleCity: (state, action: { payload: string }) => {
      return {
        ...state,
        cities: {
          ...state.cities,
          [action.payload]: !state.cities[action.payload],
        },
      };
    },
  },
});

export const { toggleCity } = filtersSlice.actions;
