import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
  isOpenedFilterMenu: boolean;
}

const initialState: SettingsState = {
  isOpenedFilterMenu: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleFilterMenu: (state) => ({
      ...state,
      isOpenedFilterMenu: !state.isOpenedFilterMenu,
    }),
  },
});

export const { toggleFilterMenu } = settingsSlice.actions;
