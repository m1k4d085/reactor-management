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
    return "primary" as ThemeType;
  },
  setTheme(theme: ThemeType) {
    console.log(theme);
  },
};
