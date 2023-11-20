import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./auth/authSlice";
import { hackatonSlice } from "./hackatons/hackatonSlice";
import { settingsSlice } from "./settings/settingsSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [hackatonSlice.name]: hackatonSlice.reducer,
    [settingsSlice.name]: settingsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
