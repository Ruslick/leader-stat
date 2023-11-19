import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Paths } from "../../../constants/paths";
import { useAppSelector } from "../../../hooks/store.hooks";
import { selectAuth } from "../../../store/auth/authSelectors";

interface PrivateRouteProps {
  anonimous?: boolean;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ anonimous = false }) => {
  const { success, loading } = useAppSelector(selectAuth);

  if (loading) {
    return <Outlet />;
  }

  if (!anonimous && !success) {
    return <Navigate to={Paths.Registration} />;
  }
  if (anonimous && success) {
    return <Navigate to={Paths.Home} />;
  }

  return <Outlet />;
};
