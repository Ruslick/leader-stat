import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Mantine } from "./shared/styles/theme";
import "./shared/styles/index.css";

const App = () => {
  return (
    <Mantine>
      <RouterProvider router={router} />
      <Notifications />
    </Mantine>
  );
};

export default App;
