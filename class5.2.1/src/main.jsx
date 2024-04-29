import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// hooks/useCrud

// useState
// useEffect
// useRef

// axios
// react-hook-form
// react-router-dom

// react-redux @reduxjs/toolkit

// useContext ---- similar a redux de react
// zustand -- similar a redux pero mas facil
