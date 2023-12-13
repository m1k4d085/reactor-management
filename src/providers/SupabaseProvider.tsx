import { PropsWithChildren } from "react";
import { Supabase, SupabaseFunctions } from "../contexts/Supabase";

interface SupabaseProviderProps extends PropsWithChildren {
  supabase: SupabaseFunctions;
}

function SupabaseProvider({ supabase, children }: SupabaseProviderProps) {
  return <Supabase.Provider value={supabase}>{children}</Supabase.Provider>;
}
export default SupabaseProvider;
