import { createContext } from "react";
import { ModeType, ThemeType } from "../util";

export type ThemeData = {
  modeType: ModeType;
  themeType: ThemeType;
};

export type ThemeFunctions = {
  setMode(mode: ModeType): void;
  setTheme(theme: ThemeType): void;
  switchMode(): ModeType;
};

export const Theme = createContext<(ThemeData & ThemeFunctions) | null>(null);
