import { createHashRouter } from "react-router-dom";
import { LogoutButton } from "../components/Auth/LogoutButton/LogoutButton";
import { PrivateRoute } from "../components/Auth/PrivateRoute/PrivateRoute";
import { Layout } from "../components/Layout/Layout/Layout";
import { AuthLayout } from "../components/shared/Auth/AuthLayout/AuthLayout";
import { Paths } from "../constants/paths";
import { HomePage } from "./Home/Home";
import { Kit } from "./Kit/Kit";
import { Login } from "./Login/Login";

export const router = createHashRouter([
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
            path: Paths.Login,
            element: <Login />,
          },
        ],
      },
    ],
  },
]);
