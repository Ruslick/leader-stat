import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../shared/api/axios";
import {handleAxiosError} from "../../shared/utils/error-factories";
import {ProfileAPIModel} from "../../shared/types/profile";
import {PROFILE_URL} from "../../shared/constants/api";

export const getProfileThunk = createAsyncThunk(
    "profile/my_profile",
    async (_, thunkAPI) => {
        try {
            const res = await api.get<ProfileAPIModel>(PROFILE_URL);
            console.log(res.data);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(handleAxiosError(err, "Failed to get profile"));
        }
    },
);