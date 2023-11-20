import { useEffect } from "react";
import {
  getThemeLocalStorage,
  setThemeLocalStorage,
} from "../../utils/theme-controller";

export const useInitTheme = () => {
  useEffect(() => {
    const theme = getThemeLocalStorage();
    if (theme) {
      setThemeLocalStorage(theme);
    }
  }, []);
};
