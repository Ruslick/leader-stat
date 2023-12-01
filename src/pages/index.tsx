import { Navigate, createHashRouter } from "react-router-dom";
import { LogoutButton } from "../components/Auth/LogoutButton/LogoutButton";
import { PrivateRoute } from "../components/Auth/PrivateRoute/PrivateRoute";
import { Layout } from "../components/Layout/Layout/Layout";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { Paths } from "../shared/constants/paths";
import { AuthLayout } from "../shared/ui/Auth/AuthLayout/AuthLayout";
import { HackatonPage } from "./Hackaton/Hackaton";
import { HackatonsPage } from "./Hackatons/Hackatons";

export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to={Paths.Hackatons} />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: Paths.Hackatons,
        element: <HackatonsPage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: `${Paths.Hackatons}/:id`,
            element: <HackatonPage />,
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
    element: <PrivateRoute anonimous />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: Paths.Login,
            element: <Login />,
          },
          {
            path: Paths.Registration,
            element: <Register />,
          },
        ],
      },
    ],
  },
]);
