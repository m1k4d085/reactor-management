import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

function Root() {
  const state = useAuth();
  return (
    <Drawer
      renderDrawer={({ opened }) => (
        <>
          <Navbar large={opened} />
          <span className="font-bold text-xs">{state.status}</span>
        </>
      )}
    >
      <div>
        <Outlet />
      </div>
    </Drawer>
  );
}
export default Root;
