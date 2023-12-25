import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { router } from "./routes";
import "./shared/styles/index.scss";

import { useInitTheme } from "./shared/hooks/themes/useInitTheme";

function App() {
  useInitTheme();
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
