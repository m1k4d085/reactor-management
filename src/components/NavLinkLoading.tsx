import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, To } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { generateNavLinkStyle } from "../util";

interface NavLinkLoadingProps {
  to: To;
  large?: boolean;
  icon?: IconDefinition;
  label?: string;
  title?: string;
}

function NavLinkLoading({
  to,
  icon,
  large = true,
  label,
  title,
}: NavLinkLoadingProps) {
  const theme = useTheme();
  return (
    <NavLink
      to={to}
      title={title || label}
      className={({ isActive, isPending }) =>
        generateNavLinkStyle(theme!.themeType, isActive, isPending)
      }
    >
      {({ isPending }) => (
        <>
          {isPending ? (
            <FontAwesomeIcon icon={faSpinner} spin className="text-2xl" />
          ) : (
            <FontAwesomeIcon icon={icon || faLink} className="text-2xl" />
          )}
          {large && label}
        </>
      )}
    </NavLink>
  );
}
export default NavLinkLoading;
