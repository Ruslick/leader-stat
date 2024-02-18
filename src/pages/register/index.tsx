import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Register } from "../../components/auth/RegisterForm";
import { auth } from "../../stores/auth/store";
import { ProtectedRoute } from "../../components/auth/ProtectedRoute/ProtectedRoute";

export const RegistrationPage: FC = observer(() => {
  return (
    <ProtectedRoute condition={!auth.isAuth} redirectTo="/hackatons">
      <Register />
    </ProtectedRoute>
  );
});
