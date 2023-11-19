export const themes = {
  navy: "navy",
  pearl: "pearl",
  gray: "gray",
  black: "black",
} as const;

export type Themes = keyof typeof themes;

export const THEME_KEY = "theme";
