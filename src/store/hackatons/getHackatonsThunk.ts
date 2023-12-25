import { createAsyncThunk } from "@reduxjs/toolkit";
import { protectedRequest } from "../../shared/api/axios";
import { hackatonsConvertDates } from "../../shared/utils/date-converters";
import { handleAxiosError } from "../../shared/utils/error-factories";
import { Hackaton, HackatonDTO } from "../../shared/types/hackaton";
import { HACKATON_URL } from "../../shared/constants/api";
import { ApiError, PaginationDTO } from "../../shared/types/general";

export const getHackatonsThunk = createAsyncThunk<Hackaton[], string, { rejectValue: ApiError }>(
  "hackatons/getHackatons",
  async (params, { rejectWithValue }) => {
    try {
      const preparedUrl = `${HACKATON_URL}?is_online=False`;

      const res = await protectedRequest.get<PaginationDTO<HackatonDTO[]>>(preparedUrl);
      return hackatonsConvertDates(res.data.results);
    } catch (err) {
      return rejectWithValue(handleAxiosError(err, "Failed to get hackatons"));
    }
  },
);
