import { RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import "./styles/themes.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { router } from "./pages";
import { useInitTheme } from "./hooks/themes/useInitTheme";

function App() {
  useInitTheme();
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
