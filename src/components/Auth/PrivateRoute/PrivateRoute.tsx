import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { checkAuth } from "../../../utils/auth-controller";
import { Paths } from "../../../constants/paths";



interface PrivateRouteProps {
  anonimous?: boolean;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ anonimous = false }) => {
  const isAuth = checkAuth();

  if (!anonimous && !isAuth) {
    return <Navigate to={Paths.SingIn} />;
  }
  if (anonimous && isAuth) {
    return <Navigate to={Paths.Home} />;
  }
  return <Outlet />;
};
