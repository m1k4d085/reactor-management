import { Session, SignInWithPasswordCredentials, User } from "@supabase/supabase-js";
import { createContext } from "react";

interface SignIn {
    user: User;
    session: Session;
}

interface Recover {
    user: User | null;
    session: Session | null;
}

export type SupabaseFunctions = {
    signIn(credentials: SignInWithPasswordCredentials): Promise<SignIn>;
    signOut(): Promise<void>;
    recoverSession(): Promise<Recover>;
}

export const Supabase = createContext<SupabaseFunctions | null>(null);