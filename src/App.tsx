import { RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import "./styles/themes.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { router } from "./pages";
import { Theme } from "./components/Theme/Theme";

function App() {
  document.documentElement.setAttribute("data-theme", "default");
  return (
    <Provider store={store}>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </Provider>
  );
}

export default App;
