import { notify } from "@src/stores/notifications";
import axios from "axios";
import { API } from "./constants";

export const api = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const refresh = localStorage.getItem("refresh");
    if (!refresh) return Promise.reject(error);

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(`${API.BASE_URL}${API.TOKEN_REFRESH}`, {
          refresh,
        });
        const { access } = response.data;

        localStorage.setItem("access", access);

        originalRequest.headers.Authorization = `Bearer ${access}`;
        return axios(originalRequest);
      } catch (error) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        notify.error({ title: "Ошибка", message: "Срок действия токена истек" });
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
