import { createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../api/axios";
// import { HACKATON_URL } from "../../constants/api";
import { handleAxiosError } from "../../utils/createError";
import { Hackaton } from "../../types/hackaton";
import { ApiError } from "../../types/general";
import { hackatonsMock } from "./hackatons.mock";

export const getHackatonsThunk = createAsyncThunk<
  Hackaton[],
  void,
  { rejectValue: ApiError }
>("hakatons/getHakatons", async (_, { rejectWithValue }) => {
  try {
    // const res = await api.get(HACKATON_URL);
    // return res.data;
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    return JSON.parse(hackatonsMock, (key, value) => {
      if (
        key === "start" ||
        key === "end" ||
        key === "start_registration" ||
        key === "end_registration"
      ) {
        return new Date(value);
      }

      return value;
    });
  } catch (err) {
    return rejectWithValue(handleAxiosError(err, "Failed to get hakatons"));
  }
});
