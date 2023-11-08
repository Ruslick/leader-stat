import { createContext } from "react";
import { Themes } from "../../constants/themes";

export const ThemeContext = createContext<((theme: Themes) => void )| null>(null);
