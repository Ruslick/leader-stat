import { RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { router } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
