import { createSlice } from "@reduxjs/toolkit";
import { Hakaton } from "../../types/hakaton";
import { getHakatonsThunk } from "./getHakatonsThunk";
import { ApiError } from "../../types/general";
import { createError } from "../../utils/createError";

export interface HakatonsState {
  loading: boolean;
  success: boolean;
  error: ApiError | null;
  hakatons: Hakaton[];
}

const initialState: HakatonsState = {
  loading: false,
  success: false,
  error: null,
  hakatons: [],
};

export const hakatonSlice = createSlice({
  name: "hakaton",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getHakatonsThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getHakatonsThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          success: true,
          hakatons: payload,
        };
      })
      .addCase(getHakatonsThunk.rejected, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          error: payload || createError("Hakatons loading failed"),
        };
      });
  },
});
