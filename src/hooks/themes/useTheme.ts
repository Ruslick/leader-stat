import {
  getThemeLocalStorage,
  setThemeLocalStorage,
} from "../../utils/theme-controller";

export const useTheme = (): [
  typeof getThemeLocalStorage,
  typeof setThemeLocalStorage,
] => {
  return [getThemeLocalStorage, setThemeLocalStorage];
};
