import {
  Session,
  SignInWithPasswordCredentials,
  User,
} from "@supabase/supabase-js";
import { createContext } from "react";
import {
  Database,
  Tables,
  TablesInsert,
  TablesUpdate,
} from "../supabase/database.types";

interface SignIn {
  user: User;
  session: Session;
}

interface Recover {
  user: User | null;
  session: Session | null;
}

export type CRUD<Entity extends keyof Database["public"]["Tables"]> = {
  get(query?: Partial<Tables<Entity>>): Promise<Tables<Entity>[] | null>;
  getOne(params: { id: string }): Promise<Tables<Entity> | null>;
  insert(params: {
    entity: TablesInsert<Entity>;
  }): Promise<Tables<Entity> | null>;
  update(params: {
    id: string;
    entity: TablesUpdate<Entity>;
  }): Promise<Tables<Entity> | null>;
  remove(params: { id: string }): Promise<void>;
};

export type SupabaseFile = {
  name: string;
  url: string;
};

export type SupabaseFunctions = {
  signIn(credentials: SignInWithPasswordCredentials): Promise<SignIn>;
  signOut(): Promise<void>;
  recoverSession(): Promise<Recover>;
  uploadFile(file: File): Promise<string>;
  listFiles(): Promise<SupabaseFile[]>;
  removeFile(filename: string): Promise<void>;
  products: CRUD<"products">;
  media: CRUD<"media">;
  customers: CRUD<"customers">;
  addresses: CRUD<"addresses">;
  orders: CRUD<"orders">;
  orderLines: CRUD<"order_lines">;
};

export const Supabase = createContext<SupabaseFunctions | null>(null);
