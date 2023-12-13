import { PropsWithChildren } from "react";
import { useAppSelector } from "../state";
import { Navigate, To } from "react-router-dom";

interface ProtectedProps extends PropsWithChildren {
  redirectTo: To;
}

function Protected({ redirectTo, children }: ProtectedProps) {
  const auth = useAppSelector(({ auth }) => auth);
  console.log(auth.loggedIn)
  if (auth.loggedIn) return children;
  else return <Navigate to={redirectTo} />;
}
export default Protected;
