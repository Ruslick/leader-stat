import { createBrowserRouter } from "react-router-dom";
import { Paths } from "../constants/paths";
import { HomePage } from "./Home/Home";

export const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <HomePage />,
  },
]);
