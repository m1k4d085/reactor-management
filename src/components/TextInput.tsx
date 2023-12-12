import { ComponentProps } from "react";
import { ThemeType, generateInputStyle } from "../util";
import { useTheme } from "../hooks/useTheme";

interface TextInputProps
  extends Omit<ComponentProps<"input">, "type" | "className" | "style"> {
  label?: string;
  themeType?: ThemeType;
  type?: "text" | "tel" | "email" | "number" | "password" | "search" | "url";
}

function TextInput({
  label,
  themeType,
  type = "text",
  ...inputProps
}: TextInputProps) {
  const theme = useTheme();
  return (
    <div className="flex m-2 justify-between w-[30rem]">
      {label && (
        <label
          htmlFor={inputProps.id}
          className="px-4 py-2 text-dark dark:text-light"
          style={{
            opacity: inputProps.disabled ? 0.5 : 1,
          }}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={generateInputStyle(
          themeType || theme?.themeType || "primary"
        )}
        {...inputProps}
      />
    </div>
  );
}
export default TextInput;
