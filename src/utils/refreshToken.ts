import axios from "axios";
import { REFRESH_TOKEN_URL } from "../constants/api";
import { store } from "../store";
import { setError } from "../store/auth/authSlice";
import { JwtRefreshResponse } from "../types/auth";
import { getAuthLocalStorage, setAuthLocalStorage } from "./auth-controller";
import { createError, handleAxiosError } from "./createError";

export const refreshToken = async () => {
  const { refresh } = getAuthLocalStorage();
  if (!refresh) {
    return Promise.reject(createError("Refresh token not found"));
  }

  try {
    const res = await axios.post<JwtRefreshResponse>(REFRESH_TOKEN_URL, {
      refresh,
    });
    const { access } = res.data;
    setAuthLocalStorage({ access });
    return access;
  } catch (_err) {
    const err = handleAxiosError(_err, "Refresh token error");
    store.dispatch(setError(err));
    return Promise.reject(err);
  }
};
