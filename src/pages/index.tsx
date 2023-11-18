import { createBrowserRouter } from "react-router-dom";
import { Paths } from "../constants/paths";
import { HomePage } from "./Home/Home";
import { Kit } from "./Kit/Kit";
import { SignIn } from "./SignIn/SignIn";
import { PrivateRoute } from "../components/Auth/PrivateRoute/PrivateRoute";
import { AuthLayout } from "../components/shared/Auth/AuthLayout/AuthLayout";
import { Layout } from "../components/Layout/Layout/Layout";
import { LogoutButton } from "../components/Auth/LogoutButton/LogoutButton";

export const router = createBrowserRouter([
  { path: Paths.Kit, element: <Kit /> },
  {
    path: "/",
    // element: <PrivateRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: Paths.Home,
            element: <HomePage />,
          },
          {
            path: Paths.Market,
            element: <div>Market</div>,
          },
          {
            path: Paths.Messages,
            element: <div>Messages</div>,
          },
          {
            path: Paths.Profile,
            element: (
              <div>
                <LogoutButton />
              </div>
            ),
          },
          {
            path: Paths.News,
            element: <div>News</div>,
          },
        ],
      },
    ],
  },

  {
    path: "/",
    element: <PrivateRoute anonimous />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: Paths.SingIn,
            element: <SignIn />,
          },
        ],
      },
    ],
  },
]);
