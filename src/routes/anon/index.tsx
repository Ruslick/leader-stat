import { PrivateRoute } from "../../components/Auth/PrivateRoute/PrivateRoute";
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Register/Register";
import { Paths } from "../../shared/constants/paths";

export const anonRoutes = {
  element: <PrivateRoute anonimous />,
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
};
