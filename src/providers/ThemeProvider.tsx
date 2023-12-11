import { PropsWithChildren, useEffect, useState } from "react";
import { Theme } from "../contexts/Theme";
import { ModeType, ThemeType } from "../util";
import { themeBrowser } from "../theme/theme";

interface ThemeProviderProps extends PropsWithChildren {}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [modeType, setModeType] = useState<ModeType>(themeBrowser.getMode());
  const [themeType, setThemeType] = useState<ThemeType>(
    themeBrowser.getTheme()
  );

  useEffect(() => {
    themeBrowser.setMode(modeType);
  }, [modeType]);

  useEffect(() => {
    themeBrowser.setTheme(themeType);
  }, [themeType]);

  return (
    <Theme.Provider
      value={{
        modeType,
        themeType,
        setMode(mode) {
          setModeType(mode);
        },
        setTheme(theme) {
          setThemeType(theme);
        },
        switchMode() {
          const newMode = modeType === "dark" ? "light" : "dark";
          setModeType(newMode);
          return newMode;
        },
      }}
    >
      {children}
    </Theme.Provider>
  );
}
export default ThemeProvider;
