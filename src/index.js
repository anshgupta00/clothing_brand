import React from "react";

import { render } from "react-dom";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.context";

import "./index.scss";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
