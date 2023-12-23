import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectProfileSlice = (state: RootState) => state.profile;

export const selectProfile = createSelector(
    [
        (state: RootState) => state.profile.loading,
        (state: RootState) => state.profile.success,
        (state: RootState) => state.profile.error,
        (state: RootState) => state.profile.profileDTO,
    ],
    (loading, success, error, profileDTO) => ({
        loading,
        success,
        error,
        profileDTO,
    }),
);
