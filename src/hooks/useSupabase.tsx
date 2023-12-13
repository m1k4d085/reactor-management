import { useContext } from "react";
import { Supabase } from "../contexts/Supabase";

export const useSupabase = () => useContext(Supabase);