import axios from "axios";
import { getAuthLocalStorage } from "../utils/auth-controller";
import { refreshToken } from "../utils/refreshToken";

export const api = axios.create();

api.interceptors.request.use(async (config) => {
  const { access } = getAuthLocalStorage();
  if (access) {
    config.headers.setAuthorization(`Bearer ${access}`);
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;

      const access = await refreshToken();

      originalRequest.headers.setAuthorization(`Bearer ${access}`);
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);
