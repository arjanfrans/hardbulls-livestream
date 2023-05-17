import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./baseball/index.css";
import App from "./App";

const rootElement = document.createElement("_scoreboard_root");
const root = ReactDOM.createRoot(
  rootElement
);

document.body.prepend(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
