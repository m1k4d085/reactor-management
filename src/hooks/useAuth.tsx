import { useEffect, useState } from "react";
import { useSupabase } from "./useSupabase";
import { useAppDispatch } from "../state";
import { recover } from "../state/authSlice";

function useAuth() {
  const [state, setState] = useState<
    | {
        status: "init" | "pending" | "recovered";
      }
    | {
        status: "error";
        error: unknown;
      }
  >({
    status: "init",
  });
  const supabase = useSupabase();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function recoverSession() {
      if (supabase) {
        try {
          const { session, user } = await supabase.recoverSession();
          if (session == null || user == null)
            throw new Error("Dati non recuperati");

          console.log(session, user);

          dispatch(recover({ session, user }));
          setState({ status: "recovered" });
        } catch (error) {
          setState({ status: "error", error });
        }
      }
    }
    setState({ status: "pending" });
    recoverSession();
  }, [supabase, dispatch]);

  return state;
}
export default useAuth;
