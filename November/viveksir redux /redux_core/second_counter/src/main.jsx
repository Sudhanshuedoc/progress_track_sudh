// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App, { counterReducer } from "./App.jsx";
import { legacy_createStore } from "redux";
let store = legacy_createStore(counterReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
