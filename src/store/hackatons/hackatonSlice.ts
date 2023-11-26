import { createSlice } from "@reduxjs/toolkit";
import { getHackatonsThunk } from "./getHackatonsThunk";
import { ApiError } from "../../shared/types/general";
import { Hackaton, HackatonsFilter, HackatonsView } from "../../shared/types/hackaton";
import { createError } from "../../shared/utils/error-factories";

export interface HakatonsState {
  loading: boolean;
  success: boolean;
  error: ApiError | null;
  hakatons: Hackaton[];
  activeFilter: HackatonsFilter;
  gridView: HackatonsView;
}

const initialState: HakatonsState = {
  loading: false,
  success: false,
  error: null,
  hakatons: [],
  activeFilter: "all",
  gridView: "grid",
};

export const hackatonSlice = createSlice({
  name: "hackaton",
  initialState,
  reducers: {
    toggleHackatonView: (state) => {
      return {
        ...state,
        gridView: state.gridView === "grid" ? "list" : "grid",
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getHackatonsThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getHackatonsThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          success: true,
          hakatons: payload,
        };
      })
      .addCase(getHackatonsThunk.rejected, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          error: payload || createError("Hackatons loading failed"),
        };
      });
  },
});

export const { toggleHackatonView } = hackatonSlice.actions;
