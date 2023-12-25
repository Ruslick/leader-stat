import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKENS_URL } from "../../shared/constants/api";
import { handleAxiosError } from "../../shared/utils/error-factories";
import { SignInValues } from "../../shared/types/auth/auth";
import { TokensDTO } from "../../shared/types/auth/authDTO";
import { ApiError } from "../../shared/types/general";

export const loginUserThunk = createAsyncThunk<TokensDTO, SignInValues, { rejectValue: ApiError }>(
  "auth/login",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.post(TOKENS_URL, values);
      return res.data;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err, "Login failed"));
    }
  },
);
