import { ChangeEvent, FC, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Themes } from "../../constants/themes";
import { getThemeLocalStorage } from "../../utils/themeController";

export const ThemeSelector: FC = () => {
  const setTheme = useContext(ThemeContext);

  if (!setTheme) return null;

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Themes);
  };

  return (
    <select
      onChange={handleSelect}
      defaultValue={getThemeLocalStorage()}
    >
      <option value={Themes.Default}>Default</option>
      <option value={Themes.Light}>Light</option>
      <option value={Themes.Dark}>Dark</option>
    </select>
  );
};
