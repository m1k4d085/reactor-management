import { ModeType, ThemeType } from "../util";

export const themeBrowser = {
  getMode() {
    const storedMode = localStorage.getItem("mode-type") as ModeType | null;
    if (storedMode) return storedMode;
    return "light";
  },
  setMode(mode: ModeType) {
    const root = window.document.documentElement;

    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("mode-type", mode);
  },
  getTheme() {
    const storedTheme = localStorage.getItem("theme-type") as ThemeType | null;
    if (storedTheme) return storedTheme;
    return "primary";
  },
  setTheme(theme: ThemeType) {
    localStorage.setItem("theme-type", theme);
  },
};
