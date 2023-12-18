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

export interface AuthPayloadRecover {
  user: User;
  session: Session;
}

// "auth/<function name>"
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    recover(state: AuthState, action: PayloadAction<AuthPayloadRecover>) {
      state.user = action.payload.user;
      state.session = action.payload.session;
      state.loggedIn = true;
    },
    signIn(state: AuthState, action: PayloadAction<AuthPayload>) {
      state.user = action.payload.user;
      state.session = action.payload.session;
      if (state.user === null || state.session === null) state.loggedIn = false;
      else state.loggedIn = true;
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
