import {
  SignInWithPasswordCredentials,
  createClient,
} from "@supabase/supabase-js";
import { SupabaseFunctions } from "../contexts/Supabase";

const client = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

async function signIn(credentials: SignInWithPasswordCredentials) {
  const { data, error } = await client.auth.signInWithPassword(credentials);
  if (error) throw error;
  return data;
}

async function signOut() {
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

async function recoverSession() {
  const {
    data: { session },
    error: sessionError,
  } = await client.auth.getSession();
  if (sessionError) throw sessionError;

  if (session?.expires_at && session.expires_at < Date.now()) {
    const { data, error: refreshError } = await client.auth.refreshSession();
    if (refreshError) throw refreshError;

    return data;
  }

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();
  if (userError) throw userError;

  return { user, session };
}

export const supabase: SupabaseFunctions = {
  signIn,
  signOut,
  recoverSession,
};
