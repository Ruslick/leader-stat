import { createBrowserRouter } from "react-router-dom";
import { Paths } from "../constants/paths";
import { HomePage } from "./Home/Home";
import { Kit } from "./Kit/Kit";
import { SignIn } from "./SignIn/SignIn";
import { PrivateRoute } from "../components/Auth/PrivateRoute/PrivateRoute";
import { AuthLayout } from "../components/shared/Auth/AuthLayout/AuthLayout";

export const router = createBrowserRouter([
  { path: Paths.Kit, element: <Kit /> },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: Paths.Home,
        element: <HomePage />,
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
