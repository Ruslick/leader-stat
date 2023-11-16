import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";
import { TOKENS_URL } from "../../constants/api";
import { SignInValues, TokensResponse } from "../../types/auth";
import { handleAxiosError } from "../../utils/createError";
import { ApiError } from "../../types/general";

export const loginUser = createAsyncThunk<
  TokensResponse,
  SignInValues,
  { rejectValue: ApiError }
>("auth/login", async (values, { rejectWithValue }) => {
  try {
    const res = await api.post(TOKENS_URL, values);
    return res.data;
  } catch (_err) {
    return rejectWithValue(handleAxiosError(_err, "Login failed"));
  }
});
