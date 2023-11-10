import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { router } from "./pages";
import { useInitTheme } from "./hooks/themes/useInitTheme";
import "./styles/reset.scss";
import "./styles/index.scss";
import "./styles/themes.scss";
import "./styles/global-variables.scss";

function App() {
  useInitTheme();
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
