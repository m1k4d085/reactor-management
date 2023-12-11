import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  ThemeType,
  generateContainerSwitchStyle,
  generateSwitchStyle,
} from "../util";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SwitchProps {
  themeType?: ThemeType;
  iconTrue?: IconDefinition;
  iconFalse?: IconDefinition;
  label?: string;
  disabled?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

function Switch({
  themeType = "primary",
  iconTrue,
  iconFalse,
  label,
  disabled,
  value,
  onChange,
}: SwitchProps) {
  const [onTrue, setOnTrue] = useState(!!value);

  useEffect(() => {
    setOnTrue(!!value);
  }, [value]);

  function toggle() {
    if (!disabled) {
      setOnTrue((prev) => !prev);
      onChange?.(!onTrue);
    }
  }

  return (
    <div className="flex m-2 item-center">
      {label && (
        <label className="px-4 py-2 disabled:opacity-50 text-dark dark:text-light">
          {label}
        </label>
      )}
      <div>
        <div
          className={generateContainerSwitchStyle(
            themeType,
            !!onTrue,
            disabled
          )}
          onClick={toggle}
        >
          <div
            className={generateSwitchStyle(themeType, !!onTrue)}
            style={{
              transform: onTrue ? "translateX(20px)" : "translateX(0)",
            }}
          >
            {onTrue
              ? iconTrue && (
                  <FontAwesomeIcon
                    className="h-4 w-4 text-light dark:text-dark"
                    icon={iconTrue}
                  />
                )
              : iconFalse && (
                  <FontAwesomeIcon
                    className="h-4 w-4 text-light dark:text-dark"
                    icon={iconFalse}
                  />
                )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Switch;
