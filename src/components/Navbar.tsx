import {
  faBook,
  faCreditCard,
  faCube,
  faImages,
  faPalette,
  faSignIn,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import NavLinkLoading from "./NavLinkLoading";
import { useAppDispatch, useAppSelector } from "../state";
import Button from "./Button";
import { useSupabase } from "../hooks/useSupabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "../state/authSlice";

interface NavbarProps {
  large?: boolean;
}

function Navbar({ large = true }: NavbarProps) {
  const { loggedIn } = useAppSelector((state) => state.auth);
  const supabase = useSupabase();
  const dispatch = useAppDispatch();

  async function logout() {
    await supabase?.signOut();
    dispatch(signOut());
  }

  return (
    <nav className="flex flex-col h-full">
      <ul className="flex flex-col gap-2 mb-2">
        {loggedIn ? (
          <>
            <li>
              <NavLinkLoading
                to="test"
                icon={faCube}
                label="Test"
                large={large}
              />
            </li>
            <li>
              <NavLinkLoading
                to="media"
                icon={faImages}
                label="Media"
                large={large}
              />
            </li>
            <li>
              <NavLinkLoading
                to="customers"
                icon={faCreditCard}
                label="Clienti"
                large={large}
              />
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLinkLoading
                to="login"
                icon={faSignIn}
                label="Login"
                large={large}
              />
            </li>
          </>
        )}
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
      {loggedIn && (
        <Button title="Logout" onClick={logout}>
          <div className="flex gap-3 justify-center">
            <FontAwesomeIcon icon={faSignOut} className="text-2xl" />
            {large && <span>Logout</span>}
          </div>
        </Button>
      )}
    </nav>
  );
}
export default Navbar;
