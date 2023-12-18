import {
  SignInWithPasswordCredentials,
  createClient,
} from "@supabase/supabase-js";
import { SupabaseFunctions } from "../contexts/Supabase";
import { Tables, TablesInsert } from "./database.types";

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

  if (!session) throw new Error("Impossibile recuperare la sessione");

  // const {
  //   data: { user },
  //   error: userError,
  // } = await client.auth.getUser();
  // if (userError) throw userError;

  return { user: session.user, session };
}

export const supabase: SupabaseFunctions = {
  signIn,
  signOut,
  recoverSession,
  products: {
    async get(query?: Partial<Tables<"products">>) {
      let select = client.from("products").select();
      if (query) {
        let field: keyof typeof query;
        for (field in query) {
          const value = query[field];
          if (value) select = select.eq(field, value);
        }
      }
      const { data, error } = await select;
      if (error) throw error;

      return data;
    },
    async getOne({ id }: { id: string }) {
      const { data, error } = await client
        .from("products")
        .select()
        .eq("id", id)
        .single();
      if (error) throw error;

      return data;
    },
    async insert({ entity }: { entity: TablesInsert<"products"> }) {
      const { data, error } = await client
        .from("products")
        .insert(entity)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async update({
      id,
      entity,
    }: {
      id: string;
      entity: TablesInsert<"products">;
    }) {
      const { data, error } = await client
        .from("products")
        .update(entity)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async remove({ id }: { id: string }) {
      const { error } = await client.from("products").delete().eq("id", id);
      if (error) throw error;
    },
  },
  media: {
    async get(query?: Partial<Tables<"media">>) {
      let select = client.from("media").select();
      if (query) {
        let field: keyof typeof query;
        for (field in query) {
          const value = query[field];
          if (value) select = select.eq(field, value);
        }
      }
      const { data, error } = await select;
      if (error) throw error;

      return data;
    },
    async getOne({ id }: { id: string }) {
      const { data, error } = await client
        .from("media")
        .select()
        .eq("id", id)
        .single();
      if (error) throw error;

      return data;
    },
    async insert({ entity }: { entity: TablesInsert<"media"> }) {
      const { data, error } = await client
        .from("media")
        .insert(entity)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async update({
      id,
      entity,
    }: {
      id: string;
      entity: TablesInsert<"media">;
    }) {
      const { data, error } = await client
        .from("media")
        .update(entity)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async remove({ id }: { id: string }) {
      const { error } = await client.from("media").delete().eq("id", id);
      if (error) throw error;
    },
  },
  customers: {
    async get(query?: Partial<Tables<"customers">>) {
      let select = client.from("customers").select();
      if (query) {
        let field: keyof typeof query;
        for (field in query) {
          const value = query[field];
          if (value) select = select.eq(field, value);
        }
      }
      const { data, error } = await select;
      if (error) throw error;

      return data;
    },
    async getOne({ id }: { id: string }) {
      const { data, error } = await client
        .from("customers")
        .select()
        .eq("id", id)
        .single();
      if (error) throw error;

      return data;
    },
    async insert({ entity }: { entity: TablesInsert<"customers"> }) {
      const { data, error } = await client
        .from("customers")
        .insert(entity)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async update({
      id,
      entity,
    }: {
      id: string;
      entity: TablesInsert<"customers">;
    }) {
      const { data, error } = await client
        .from("customers")
        .update(entity)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async remove({ id }: { id: string }) {
      const { error } = await client.from("customers").delete().eq("id", id);
      if (error) throw error;
    },
  },
  addresses: {
    async get(query?: Partial<Tables<"addresses">>) {
      let select = client.from("addresses").select();
      if (query) {
        let field: keyof typeof query;
        for (field in query) {
          const value = query[field];
          if (value) select = select.eq(field, value);
        }
      }
      const { data, error } = await select;
      if (error) throw error;

      return data;
    },
    async getOne({ id }: { id: string }) {
      const { data, error } = await client
        .from("addresses")
        .select()
        .eq("id", id)
        .single();
      if (error) throw error;

      return data;
    },
    async insert({ entity }: { entity: TablesInsert<"addresses"> }) {
      const { data, error } = await client
        .from("addresses")
        .insert(entity)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async update({
      id,
      entity,
    }: {
      id: string;
      entity: TablesInsert<"addresses">;
    }) {
      const { data, error } = await client
        .from("addresses")
        .update(entity)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async remove({ id }: { id: string }) {
      const { error } = await client.from("addresses").delete().eq("id", id);
      if (error) throw error;
    },
  },
  orders: {
    async get(query?: Partial<Tables<"orders">>) {
      let select = client.from("orders").select();
      if (query) {
        let field: keyof typeof query;
        for (field in query) {
          const value = query[field];
          if (value) select = select.eq(field, value);
        }
      }
      const { data, error } = await select;
      if (error) throw error;

      return data;
    },
    async getOne({ id }: { id: string }) {
      const { data, error } = await client
        .from("orders")
        .select()
        .eq("id", id)
        .single();
      if (error) throw error;

      return data;
    },
    async insert({ entity }: { entity: TablesInsert<"orders"> }) {
      const { data, error } = await client
        .from("orders")
        .insert(entity)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async update({
      id,
      entity,
    }: {
      id: string;
      entity: TablesInsert<"orders">;
    }) {
      const { data, error } = await client
        .from("orders")
        .update(entity)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async remove({ id }: { id: string }) {
      const { error } = await client.from("orders").delete().eq("id", id);
      if (error) throw error;
    },
  },
  orderLines: {
    async get(query?: Partial<Tables<"order_lines">>) {
      let select = client.from("orders").select();
      if (query) {
        let field: keyof typeof query;
        for (field in query) {
          const value = query[field];
          if (value) select = select.eq(field, value);
        }
      }
      const { data, error } = await select;
      if (error) throw error;

      return data;
    },
    async getOne({ id }: { id: string }) {
      const { data, error } = await client
        .from("order_lines")
        .select()
        .eq("id", id)
        .single();
      if (error) throw error;

      return data;
    },
    async insert({ entity }: { entity: TablesInsert<"order_lines"> }) {
      const { data, error } = await client
        .from("order_lines")
        .insert(entity)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async update({
      id,
      entity,
    }: {
      id: string;
      entity: TablesInsert<"order_lines">;
    }) {
      const { data, error } = await client
        .from("order_lines")
        .update(entity)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;

      return data;
    },
    async remove({ id }: { id: string }) {
      const { error } = await client.from("order_lines").delete().eq("id", id);
      if (error) throw error;
    },
  },
};
