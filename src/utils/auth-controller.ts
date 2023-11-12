export const checkAuth = () => !!localStorage.getItem("access_token");
export const setAuth = (tokens: { access: string; refresh: string }) => {
  localStorage.setItem("access_token", tokens.access);
  localStorage.setItem("refresh_token", tokens.refresh);
};
export const removeAuth = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
export const getAuth = () => {
  return {
    access: localStorage.getItem("access_token"),
    refresh: localStorage.getItem("refresh_token"),
  };
};
