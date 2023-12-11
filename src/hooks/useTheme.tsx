import { useContext } from "react";
import { Theme } from "../contexts/Theme";

export const useTheme = () => useContext(Theme);