import { RegistrationPage } from "@src/pages/register";
import { createHashRouter } from "react-router-dom";
import { AuthLayout } from "../layouts/auth";
import { DefaultLayout } from "../layouts/default";
import { HackatonsPage } from "../pages/hackatons";
import { LoginPage } from "../pages/login";
import { Redirect } from "./Redirect";

// Заменить когда будет но норм хостиге (createBrowserRouter)
export const router = createHashRouter([
  { path: "/", element: <Redirect /> },
  {
    element: <DefaultLayout />,
    children: [
      { path: "profile", element: <Redirect /> },
      { path: "news", element: <Redirect /> },
      { path: "market", element: <Redirect /> },
      { path: "messages", element: <Redirect /> },
      {
        path: "hackatons",
        element: <HackatonsPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "registration", element: <RegistrationPage /> },
    ],
  },
]);
