import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api/axios";
import { hackatonsConvertDates } from "../../shared/utils/date-converters";
import { handleAxiosError } from "../../shared/utils/error-factories";
import { Hackaton, HackatonDTO } from "../../shared/types/hackaton";
import { HACKATON_URL } from "../../shared/constants/api";
import { ApiError } from "../../shared/types/general";

export const getHackatonsThunk = createAsyncThunk<Hackaton[], { id?: string }, { rejectValue: ApiError }>(
  "hakatons/getHakatons",
  async (params, { rejectWithValue }) => {
    try {
      const res = await api.get<HackatonDTO[]>(HACKATON_URL, { params });
      return hackatonsConvertDates(res.data);
    } catch (err) {
      return rejectWithValue(handleAxiosError(err, "Failed to get hakatons"));
    }
  },
);
