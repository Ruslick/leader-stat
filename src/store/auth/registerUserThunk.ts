import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api/axios";
import { USERLIST_URL } from "../../shared/constants/api";
import { handleAxiosError } from "../../shared/utils/error-factories";
import { SignUpValues } from "../../shared/types/auth/auth";
import { TokensDTO } from "../../shared/types/auth/authDTO";
import { ApiError } from "../../shared/types/general";

export const registerUserThunk = createAsyncThunk<TokensDTO, SignUpValues, { rejectValue: ApiError }>(
  "register/login",
  async (values, { rejectWithValue }) => {
    try {
      const res = await api.post(USERLIST_URL, values);
      return res.data;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err, "Registration failed"));
    }
  },
);
