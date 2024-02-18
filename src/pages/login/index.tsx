import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Login } from "../../components/auth/Login";
import { ProtectedRoute } from "../../components/auth/ProtectedRoute/ProtectedRoute";
import { auth } from "../../stores/auth/store";

export const LoginPage: FC = observer(() => {
  return (
    <ProtectedRoute condition={!auth.isAuth} redirectTo="/hackatons">
      <Login />
    </ProtectedRoute>
  );
});
