import { THEME_KEY, Themes } from "../constants/themes";

export const setThemeLocalStorage = (theme: Themes) => {
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
export const getThemeLocalStorage = () => {
  let theme = localStorage.getItem(THEME_KEY);

  if (!theme) {
    theme = setThemeLocalStorage(Themes.Default);
  }

  return theme as Themes;
};
