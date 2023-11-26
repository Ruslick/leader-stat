import { FC } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { useAppDispatch } from "../../../shared/hooks/store.hooks";
import { logout } from "../../../store/auth/authSlice";

export const LogoutButton: FC = () => {
  const dispatch = useAppDispatch();
  return <Button onClick={() => dispatch(logout())}>Выйти</Button>;
};
