import { createSlice } from "@reduxjs/toolkit";
import {
  checkAuthLocalStorage,
  removeAuthLocalStorage,
  setAuthLocalStorage,
} from "../../utils/auth-controller";
import { createError } from "../../utils/createError";
import { loginUser } from "./loginUser";
import { ApiError } from "../../types/general";

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
      .addCase(loginUser.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        setAuthLocalStorage(payload);
        return {
          ...state,
          loading: false,
          success: true,
        };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        
        return {
          ...state,
          loading: false,
          error: payload || createError("Login failed"),
        };
      });
  },
});

export const { logout, setError } = authSlice.actions;
