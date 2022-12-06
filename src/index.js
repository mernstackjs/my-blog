import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProviderPost } from "./context/PostContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderPost>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderPost>
  </React.StrictMode>
);
