import { render, renderHook, waitFor } from "@testing-library/react";
import { test, expect } from "vitest";
// import { sleep } from "../util";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import SupabaseProvider from "../providers/SupabaseProvider";
import ThemeProvider from "../providers/ThemeProvider";
import { queryClient } from "../query";
import { router } from "../router";
import { store } from "../state";
import { supabase } from "../supabase";
import Button from "../components/Button";
import useCustomers from "../hooks/Customers/useSelect";
import { FC, PropsWithChildren } from "react";

test("add", () => {
  expect(1 + 1).toBe(2); //jest
});

test("add type", () => {
  // const myNumber = Number(2);
  // expectTypeOf(myNumber).toBeBoolean;
});

// describe.concurrent("prova", () => {
//   test("serial", async () => {
//     await sleep(2000);
//   });

//   test.concurrent("concurrent 1", async () => {
//     await sleep(2000);
//   });
//   test.concurrent("concurrent 2", async () => {
//     await sleep(2000);
//   });
// });

// test.concurrent("single concurrent 1", async () => {
//   await sleep(2000);
// });
// test.concurrent("single concurrent 2", async () => {
//   await sleep(2000);
// });

test("render app", async () => {
  render(
    <ThemeProvider>
      <SupabaseProvider supabase={supabase}>
        <QueryClientProvider client={queryClient}>
          <ReduxProvider store={store}>
            <RouterProvider router={router} />
          </ReduxProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    </ThemeProvider>
  );
});

test("button", async () => {
  const result = render(<Button />);
  expect(result).toMatchSnapshot();
});

test("useCustomer", async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  const wrapper: FC<PropsWithChildren> = ({ children }) => (
    <SupabaseProvider supabase={supabase}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SupabaseProvider>
  );

  const { result: customers } = renderHook(useCustomers, { wrapper });

  await waitFor(() => expect(customers.current[1].status).toBe("success"));

  expect(customers.current[1].data).toHaveLength(2);
});
