import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Login";
import IndexPage from "./IndexPage";
import Storybook from "../pages/Storybook";
import Storycolor from "../pages/Storycolor";
import { fakeLoader } from "../util";
import Protected from "./Protected";
import Test from "../pages/Test";
import Customers from "../pages/customers/Customers";
import FormCustomer from "../pages/customers/FormCustomer";
import Media from "../pages/products/Media";
import Customer from "../pages/customers/Customer";

export interface CustomerParams extends Record<string, string | undefined> {
  customerId: string | undefined;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <IndexPage />,
        loader: fakeLoader,
      },
      {
        path: "/media",
        element: (
          <Protected redirectTo="/login">
            <Media />
          </Protected>
        ),
        loader: fakeLoader,
      },
      {
        path: "/customers",
        element: (
          <Protected redirectTo="/login">
            <Customers />
          </Protected>
        ),
        loader: fakeLoader,
      },
      {
        path: "/customers/add",
        element: (
          <Protected redirectTo="/login">
            <FormCustomer />
          </Protected>
        ),
        loader: fakeLoader,
      },
      {
        path: "/customers/:customerId",
        element: (
          <Protected redirectTo="/login">
            <Customer />
          </Protected>
        ),
        loader: fakeLoader,
      },
      {
        path: "/customers/:customerId/edit",
        element: (
          <Protected redirectTo="/login">
            <FormCustomer />
          </Protected>
        ),
        loader: fakeLoader,
      },
      {
        path: "/storybook",
        element: <Storybook />,
        loader: fakeLoader,
      },
      {
        path: "/storycolor",
        element: <Storycolor />,
        loader: fakeLoader,
      },
      {
        path: "/test",
        element: (
          <Protected redirectTo="/login">
            <Test />
          </Protected>
        ),
        loader: fakeLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
