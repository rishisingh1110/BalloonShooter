import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EmptyDivContextProvider } from "./contexts/EmptyDivContext";
import { MidBoxContextProvider } from "./contexts/MidBoxContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MidBoxContextProvider>
      <EmptyDivContextProvider>
        <App />
      </EmptyDivContextProvider>
    </MidBoxContextProvider>
  </React.StrictMode>
);
