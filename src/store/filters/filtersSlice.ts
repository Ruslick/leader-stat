import { createSlice } from "@reduxjs/toolkit";

export interface FiltersState {
  cities: {
    [key: string]: boolean;
  };
  roles: {
    [key: string]: boolean;
  };
  formats: {
    [key: string]: boolean;
  };
  query: string;
}

const initialState: FiltersState = {
  cities: {
    Волгоград: false,
    Москва: false,
    "Санкт-Петербург": false,
    Екатеринбург: false,
    "Нижний Новгород": false,
  },
  formats: {
    isOnline: false,
    isOffline: false,
  },
  roles: {
    Разработчик: false,
    Тестировщик: false,
    Аналитик: false,
    Дизайнер: false,
  },
  query: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (
      state,
      { payload }: { payload: { filterSection: keyof FiltersState; filter: string } },
    ) => {
      const { filterSection, filter } = payload;
      return {
        ...state,
        [filterSection]: {
          ...state[filterSection],
          [filter]: !state[filterSection][filter],
        },
      };
    },
  },
});

export const { toggleFilter } = filtersSlice.actions;
