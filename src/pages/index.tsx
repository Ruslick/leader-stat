import { createBrowserRouter } from "react-router-dom";
import { Paths } from "../constants/paths";
import { HomePage } from "./Home/Home";
import { Kit } from "./Kit/Kit";

export const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <HomePage />,
  },
  {
    path: Paths.Kit,
    element: <Kit />,
  },
]);
