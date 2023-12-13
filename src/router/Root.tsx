import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";

function Root() {
  return (
    <Drawer
      renderDrawer={({ opened }) => (
        <>
          <Navbar large={opened} />
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
