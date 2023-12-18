import { PropsWithChildren } from "react";
import { useAppSelector } from "../state";
import { Navigate, To } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

interface ProtectedProps extends PropsWithChildren {
  redirectTo: To;
}

function Protected({ redirectTo, children }: ProtectedProps) {
  // const state = useAuth();
  const auth = useAppSelector(({ auth }) => auth);
  if (auth.loggedIn) return children;
  else return <Navigate to={redirectTo} />;
}
export default Protected;
