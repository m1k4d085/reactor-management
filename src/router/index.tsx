import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Login";
import IndexPage from "./IndexPage";
import Storybook from "../pages/Storybook";
import Storycolor from "../pages/Storycolor";
import { fakeLoader } from "../util";
import Protected from "./Protected";
import Test from "../pages/Test";

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
