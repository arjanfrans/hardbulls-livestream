import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./baseball/index.css";
import App from "./App";
import { loadState } from "./state";
import { setObs } from "./service/obs/obs-client";

const rootElement = document.createElement("_scoreboard_root");
const root = ReactDOM.createRoot(
  rootElement
);

document.body.prepend(rootElement);

(async () => {
  const initialState = await loadState()
  await setObs(initialState.obsSocket).catch((err) => console.error(err));

  root.render(
    <React.StrictMode>
      <App initialState={initialState} />
    </React.StrictMode>
  );
})()

