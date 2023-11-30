import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api/axios";
import { REGISTER_USER_URL } from "../../shared/constants/api";
import { SignUpValues } from "../../shared/types/auth/auth";
import { TokensDTO } from "../../shared/types/auth/authDTO";
import { ApiError } from "../../shared/types/general";
import { handleAxiosError } from "../../shared/utils/error-factories";

export const registerUserThunk = createAsyncThunk<TokensDTO, SignUpValues, { rejectValue: ApiError }>(
  "auth/register",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ repeat_password, ...values }, { rejectWithValue }) => {
    try {
      const res = await api.post(REGISTER_USER_URL, values);
      return res.data;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err, "Registration failed"));
    }
  },
);
