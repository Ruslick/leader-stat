import { Navigate } from "react-router-dom";
import { Paths } from "../../shared/constants/paths";

export const redirectToMainRoute = {
  path: "/",
  element: <Navigate to={Paths.Hackatons} />,
};
