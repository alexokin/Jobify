import React from "react";
import ReactDOM from "react-dom/client";
import RootCmp from "./App.jsx";
import "normalize.css";
import "./index.css";
import { AppProvider } from "./context/appContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RootCmp />
    </AppProvider>
  </React.StrictMode>
);
