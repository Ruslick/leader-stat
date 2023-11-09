import { ChangeEvent, FC } from "react";
import { Themes } from "../../constants/themes";
import { useTheme } from "../../hooks/themes/useTheme";

export const ThemeSelector: FC = () => {
  const [getTheme, setTheme] = useTheme();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value as Themes;
    setTheme(selectedTheme);
  };

  return (
    <select onChange={handleSelect} defaultValue={getTheme()}>
      <option value={Themes.Default}>Default</option>
      <option value={Themes.Light}>Light</option>
      <option value={Themes.Dark}>Dark</option>
    </select>
  );
};
