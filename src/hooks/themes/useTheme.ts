import {
  getThemeLocalStorage,
  setThemeLocalStorage,
} from "../../utils/themeController";

export const useTheme = (): [typeof getThemeLocalStorage, typeof setThemeLocalStorage] => {
  return [getThemeLocalStorage, setThemeLocalStorage];
};
