import { createSlice } from "@reduxjs/toolkit";

import { loginUserThunk } from "./loginUser";
import { ApiError } from "../../shared/types/general";
import { checkAuthLocalStorage, removeAuthLocalStorage, setAuthLocalStorage } from "../../shared/utils/auth-controller";
import { createError } from "../../shared/utils/error-factories";

interface AuthState {
  loading: boolean;
  error: ApiError | null;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  success: checkAuthLocalStorage(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setError(_, { payload }: { payload: ApiError }) {
      removeAuthLocalStorage();
      return {
        loading: false,
        success: false,
        error: payload,
      };
    },
    logout: (state) => {
      removeAuthLocalStorage();
      
      return {
        ...state,
        loading: false,
        error: null,
        success: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        setAuthLocalStorage(payload);
        return {
          ...state,
          loading: false,
          success: true,
        };
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          error: payload || createError("Login failed"),
        };
      });
  },
});

export const { logout, setError } = authSlice.actions;
