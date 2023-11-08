import { THEME_KEY, Themes } from "../constants/themes";


export const getThemeLocalStorage = () => {
  let theme = localStorage.getItem(THEME_KEY);

  if (!theme) {
    localStorage.setItem(THEME_KEY, Themes.Default);
    theme = Themes.Default;
  }

  return theme as Themes;
};

export const setThemeLocalStorage = (theme: Themes) => {
  localStorage.setItem(THEME_KEY, theme);
  return theme;
};
