import { ChangeEvent, FC } from "react";
import { themes, Themes } from "../../constants/themes";
import { useTheme } from "../../hooks/themes/useTheme";

export const ThemeSelector: FC = () => {
  const [getTheme, setTheme] = useTheme();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value as Themes;
    setTheme(selectedTheme);
  };

  return (
    <select onChange={handleSelect} defaultValue={getTheme()}>
      <option value={themes.navy}>Navy</option>
      <option value={themes.gray}>Gray</option>
      <option value={themes.pearl}>Pearl</option>
      <option value={themes.black}>Black</option>
    </select>
  );
};
