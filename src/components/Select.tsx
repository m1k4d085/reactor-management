import { useRef, useState } from "react";
import { StyleType, ThemeType } from "../util";
import ButtonGroup, { OptionsProps } from "./ButtonGroup";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../hooks/useTheme";

interface SelectProps {
  themeType?: ThemeType;
  styleType?: StyleType;
  options: OptionsProps[];
  labelUnselected?: string;
  disabled?: boolean;
  ms?: number;
  valueIndex?: number;
  onChange?: (value: OptionsProps["value"], index: number) => void;
}

function Select({
  themeType,
  styleType,
  options,
  labelUnselected = "--Select an option--",
  disabled,
  ms = 250,
  valueIndex,
  onChange,
}: SelectProps) {
  const theme = useTheme();
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [state, setState] = useState<{
    selectedIndex: number | undefined;
    opened: boolean;
  }>({
    selectedIndex: valueIndex,
    opened: false,
  });

  //   function open() {
  //     setState((prev) => ({
  //       ...prev,
  //       opened: true,
  //     }));
  //   }

  function close() {
    setState((prev) => ({
      ...prev,
      opened: false,
    }));
  }

  function toggle() {
    setState((prev) => ({
      ...prev,
      opened: !prev.opened,
    }));
  }

  function start() {
    timeout.current = setTimeout(close, ms);
  }

  function clear() {
    if (timeout.current) clearTimeout(timeout.current);
  }

  return (
    <div className="m-2 inline-block" onMouseEnter={clear} onMouseLeave={start}>
      {typeof state.selectedIndex === "undefined" ? (
        <Button
          themeType={themeType || theme?.themeType || "primary"}
          styleType={styleType}
          disabled={disabled}
          onClick={toggle}
          open={state.opened ? "bottom" : undefined}
        >
          {labelUnselected}{" "}
          <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
        </Button>
      ) : (
        <Button
          themeType={themeType || theme?.themeType || "primary"}
          styleType={styleType}
          disabled={disabled}
          onClick={toggle}
          open={state.opened ? "bottom" : undefined}
        >
          <div className="flex">
            {options[state.selectedIndex].children}{" "}
            <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
          </div>
        </Button>
      )}
      {state.opened && (
        <div className="relative">
          <div className="absolute left-0 top-[-1rem] right-0 z-[2]">
            <ButtonGroup
              themeType={themeType || theme?.themeType || "primary"}
              styleType={styleType}
              disabled={disabled}
              buttons={options.map((option, index) => ({
                ...option,
                isSelected: index === state.selectedIndex,
                onClick: (event) => {
                  if (index !== state.selectedIndex) {
                    setState((prev) => ({ ...prev, selectedIndex: index }));
                    onChange?.(option.value, index);
                  }
                  close();
                  option.onClick?.(event);
                },
              }))}
              inline={false}
              open="top"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Select;
