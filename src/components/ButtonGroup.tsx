import { ComponentProps } from "react";
import {
  BorderOpenedType,
  StyleType,
  ThemeType,
  generateButtonGroupStyle,
} from "../util";
import { useTheme } from "../hooks/useTheme";

export interface OptionsProps
  extends Omit<ComponentProps<"button">, "className" | "color" | "disabled"> {
  isSelected?: boolean;
}

interface ButtonGroupProps {
  themeType?: ThemeType;
  styleType?: StyleType;
  buttons: OptionsProps[];
  disabled?: boolean;
  inline?: boolean;
  open?: BorderOpenedType;
}

function ButtonGroup({
  themeType,
  styleType,
  buttons,
  disabled,
  inline = true,
  open,
}: ButtonGroupProps) {
  const theme = useTheme();
  return (
    <div className={inline ? "inline-block" : ""}>
      <div className="flex flex-col m-2">
        {buttons.map(({ isSelected, ...buttonProps }, index) => (
          <button
            key={index}
            {...buttonProps}
            disabled={disabled}
            className={generateButtonGroupStyle(
              themeType || theme?.themeType || "primary",
              styleType,
              isSelected,
              open
            )}
          />
        ))}
      </div>
    </div>
  );
}
export default ButtonGroup;
