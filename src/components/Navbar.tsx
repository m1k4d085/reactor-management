import {
  faBook,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import NavLinkLoading from "./NavLinkLoading";

interface NavbarProps {
  large?: boolean;
}

function Navbar({ large = true }: NavbarProps) {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLinkLoading
            to="storybook"
            icon={faBook}
            label="Storybook"
            large={large}
          />
        </li>
        <li>
          <NavLinkLoading
            to="storycolor"
            icon={faPalette}
            label="Storycolor"
            large={large}
          />
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
