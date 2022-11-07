import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "normalize.css";
import "assets/scss/index.scss";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
