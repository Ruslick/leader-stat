import {createSlice} from "@reduxjs/toolkit";
import {getProfileThunk} from "./getProfileThunk"
import {ApiError} from "../../shared/types/general";
import {ProfileAPIModel} from "../../shared/types/profile";
import {createError} from "../../shared/utils/error-factories";

export interface ProfileState {
    profileDTO: ProfileAPIModel | null;
    loading: boolean;
    success: boolean;
    error: ApiError | null;
}

const initialState: ProfileState = {
    profileDTO: null,
    loading: false,
    success: false,
    error: null,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        getProfile: (state) => state,
    },
    extraReducers(builder) {
        builder
            .addCase(getProfileThunk.pending, (state) => {
                return {
                    ...state,
                    loading: true,
                }
            })
            .addCase(getProfileThunk.fulfilled, (state, {payload}) => {
                return {
                    ...state,
                    loading: false,
                    success: true,
                    profileDTO: payload,
                }
            })
            .addCase(getProfileThunk.rejected, (state) => {
                return {
                    ...state,
                    loading: false,
                    error: createError("Profile loading failed"),
                }
            })
    },
});

