import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";
import { HACKATON_URL } from "../../constants/api";
import { handleAxiosError } from "../../utils/createError";
import { Hackaton, HackatonResponse } from "../../types/hackaton";
import { ApiError } from "../../types/general";
import { hackatonsConvertDates } from "../../utils/date";

export const getHackatonsThunk = createAsyncThunk<Hackaton[], void, { rejectValue: ApiError }>(
  "hakatons/getHakatons",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get<HackatonResponse[]>(HACKATON_URL);
      return hackatonsConvertDates(res.data);
    } catch (err) {
      return rejectWithValue(handleAxiosError(err, "Failed to get hakatons"));
    }
  },
);
