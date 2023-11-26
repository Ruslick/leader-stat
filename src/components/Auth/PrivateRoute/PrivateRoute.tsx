import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../shared/hooks/store.hooks";
import { selectAuth } from "../../../store/auth/authSelectors";
import { Paths } from "../../../shared/constants/paths";

interface PrivateRouteProps {
  anonimous?: boolean;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ anonimous = false }) => {
  const { loading, success } = useAppSelector(selectAuth);

  if (loading) {
    return <Outlet />;
  }

  if (!anonimous && !success) {
    return <Navigate to={Paths.Login} />;
  }
  if (anonimous && success) {
    return <Navigate to={Paths.Hackatons} />;
  }

  return <Outlet />;
};
