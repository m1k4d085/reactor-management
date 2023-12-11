import { ComponentProps } from "react";
import { StyleType, ThemeType, generateButtonStyle } from "../util";

interface ButtonProps
  extends Omit<ComponentProps<"button">, "className" | "color"> {
  styleType?: StyleType;
  themeType?: ThemeType;
}

function Button({
  styleType = "solid",
  themeType = "primary",
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={generateButtonStyle(themeType, styleType)}
      {...buttonProps}
    />
  );
}
export default Button;
