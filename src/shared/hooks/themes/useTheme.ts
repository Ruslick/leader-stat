import { getThemeLocalStorage, setThemeLocalStorage } from "../../utils/theme-controller";

export const useTheme = () => {
  return { getTheme: getThemeLocalStorage, setTheme: setThemeLocalStorage };
};
