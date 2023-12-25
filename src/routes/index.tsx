import { createHashRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout/Layout";
import { anonRoutes } from "./anon";
import { privateRoutes } from "./private";
import { generalRoutes } from "./general";
import { redirectToMainRoute } from "./_service/redirectToHackatons";
import { AuthLayout } from "../shared/ui/Auth/AuthLayout/AuthLayout";

export const router = createHashRouter([
  redirectToMainRoute,
  {
    element: <Layout />,
    children: [generalRoutes, privateRoutes],
  },
  {
    element: <AuthLayout />,
    children: [anonRoutes],
  },
]);
