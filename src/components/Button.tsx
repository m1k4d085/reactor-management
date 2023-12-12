import { ComponentProps } from "react";
import {
  BorderOpenedType,
  StyleType,
  ThemeType,
  generateButtonStyle,
} from "../util";
import { useTheme } from "../hooks/useTheme";

interface ButtonProps
  extends Omit<ComponentProps<"button">, "className" | "color"> {
  styleType?: StyleType;
  themeType?: ThemeType;
  open?: BorderOpenedType;
}

function Button({
  styleType = "solid",
  themeType,
  open,
  ...buttonProps
}: ButtonProps) {
  const theme = useTheme();
  return (
    <button
      className={generateButtonStyle(
        themeType || theme?.themeType || "primary",
        styleType,
        open
      )}
      {...buttonProps}
    />
  );
}
export default Button;
