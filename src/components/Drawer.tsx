import { PropsWithChildren, ReactNode, useState } from "react";
import { ThemeType, generateDrawerStyle } from "../util";
import { useTheme } from "../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface DrawerProps extends PropsWithChildren {
  opened?: boolean;
  themeType?: ThemeType;
  renderDrawer?: ({ opened }: { opened: boolean }) => ReactNode;
}

function Drawer({ opened, themeType, children, renderDrawer }: DrawerProps) {
  const theme = useTheme();
  const [state, setState] = useState({
    opened: !!opened,
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

  return (
    <div className="flex">
      {state.opened && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-dark dark:bg-light opacity-70 z-50"
          onClick={close}
        />
      )}
      <div
        className={generateDrawerStyle(
          themeType || theme?.themeType || "primary",
          !!state.opened
        )}
        style={{
          width: state.opened ? undefined : 70,
        }}
      >
        <div className="p-5 text-right" onClick={toggle}>
          <FontAwesomeIcon
            icon={state.opened ? faChevronLeft : faChevronRight}
          />
        </div>
        {renderDrawer?.({
          ...state,
        })}
      </div>
      <div className="w-full" style={{ paddingLeft: 70 }}>
        {children}
      </div>
    </div>
  );
}
export default Drawer;
