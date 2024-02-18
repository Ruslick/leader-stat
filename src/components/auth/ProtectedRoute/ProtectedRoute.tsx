import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  condition: boolean;
  redirectTo: string;
  children?: React.ReactNode;
}

export const ProtectedRoute: FC<Props> = observer(({ condition, redirectTo, children }) => {
  if (condition) {
    return children;
  }
  return <Navigate to={redirectTo} />;
});
