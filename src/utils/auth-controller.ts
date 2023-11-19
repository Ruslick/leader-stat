import { Jwt } from "../types/auth";

export const checkAuthLocalStorage = () =>
  !!localStorage.getItem("access_token");
export const setAuthLocalStorage = (tokens: Partial<Jwt>) => {
  if (tokens.access) {
    localStorage.setItem("access_token", tokens.access);
  }
  if (tokens.refresh) {
    localStorage.setItem("refresh_token", tokens.refresh);
  }
};
export const removeAuthLocalStorage = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
export const getAuthLocalStorage = () => {
  return {
    access: localStorage.getItem("access_token"),
    refresh: localStorage.getItem("refresh_token"),
  };
};
