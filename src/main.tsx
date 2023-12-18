import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeProvider from "./providers/ThemeProvider.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./state";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import SupabaseProvider from "./providers/SupabaseProvider.tsx";
import { supabase } from "./supabase";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./query/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SupabaseProvider supabase={supabase}>
        <QueryClientProvider client={queryClient}>
          <ReduxProvider store={store}>
            <RouterProvider router={router} />
          </ReduxProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    </ThemeProvider>
  </React.StrictMode>
);
