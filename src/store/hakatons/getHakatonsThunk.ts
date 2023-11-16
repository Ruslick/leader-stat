import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";
import { HAKATON_URL } from "../../constants/api";
import { handleAxiosError } from "../../utils/createError";
import { Hakaton } from "../../types/hakaton";
import { ApiError } from "../../types/general";

export const getHakatonsThunk = createAsyncThunk<
  Hakaton[],
  void,
  { rejectValue: ApiError }
>("hakatons/getHakatons", async (_, { rejectWithValue }) => {
  try {
    const res = await api.get(HAKATON_URL);
    return res.data;
  } catch (err) {
    return rejectWithValue(handleAxiosError(err, "Failed to get hakatons"));
  }
});
