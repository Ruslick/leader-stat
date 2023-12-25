import axios from "axios";
import { getAuthLocalStorage, removeAuthLocalStorage } from "../utils/auth-controller";
import { refreshToken } from "../utils/refresh-token";

export const protectedRequest = axios.create();

protectedRequest.interceptors.request.use(async (config) => {
  const { access } = getAuthLocalStorage();
  if (access) {
    config.headers.setAuthorization(`Bearer ${access}`);
  }
  return config;
});

protectedRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;

      const access = await refreshToken();

      originalRequest.headers.setAuthorization(`Bearer ${access}`);
      return axios(originalRequest);
    }
    removeAuthLocalStorage();
    return Promise.reject(error);
  },
);
