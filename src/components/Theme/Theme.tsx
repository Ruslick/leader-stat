import { FC, ReactNode, useEffect, useState } from "react";
import { Themes } from "../../constants/themes";
import {
  getThemeLocalStorage,
  setThemeLocalStorage,
} from "../../utils/themeController";
import { ThemeContext } from "./ThemeContext";

interface ThemeProps {
  children: ReactNode;
}

export const Theme: FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(getThemeLocalStorage);

  useEffect(() => {
    setThemeLocalStorage(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={setTheme}>{children}</ThemeContext.Provider>
  );
};
