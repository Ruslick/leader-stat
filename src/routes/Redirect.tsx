import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { notify } from "../stores/notifications";

export const Redirect = () => {
  useEffect(() => {
    notify.working();
  }, []);
  return <Navigate to="/hackatons" />;
};
