import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import "./assets/Translation/i18n.js";
import RoleProvider from "./Context/RolesContext.jsx";

createRoot(document.getElementById("root")).render(
  <RoleProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </RoleProvider>
);
