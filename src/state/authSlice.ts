import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session, User } from "@supabase/supabase-js";

export interface AuthState {
  user?: User | null;
  session?: Session | null;
  loggedIn?: boolean;
}

export const initialState: AuthState = {
  loggedIn: false,
};

export interface AuthPayload {
  user: User | null;
  session: Session | null;
}

// "auth/<function name>"
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    recover() {},
    signIn(state: AuthState, action: PayloadAction<AuthPayload>) {
      state.user = action.payload.user;
      state.session = action.payload.session;
      console.log(state.user, state.session);
      if (state.user === null || state.session === null) state.loggedIn = false;
      else state.loggedIn = true;
      console.log(state.loggedIn);
    },
    signOut(state: AuthState) {
      state.user = null;
      state.session = null;
      state.loggedIn = false;
    },
  },
});

export const { signIn, signOut, recover } = authSlice.actions;

export const authReducer = authSlice.reducer;
