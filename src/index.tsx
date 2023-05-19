import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./baseball/index.css";
import App from "./App";
import { LOCAL_STORAGE_KEY, loadState } from "./state";
import { setObs } from "./service/obs/obs-client";

const rootElement = document.createElement("_scoreboard_root");
const root = ReactDOM.createRoot(
  rootElement
);

document.body.prepend(rootElement);

(async () => {
  try {
    const initialState = await loadState()
    await setObs(initialState.obsSocket).catch((err) => console.error(err));

    root.render(
      <React.StrictMode>
        <App initialState={initialState} />
      </React.StrictMode>
    );
  } catch (err) {
    console.error(err);

    let message = 'Error occured :('

    if (err instanceof Error) {
      message = err.message
    }

    root.render(
      <React.StrictMode>
        {message}
        <button onClick={() => {
          localStorage.removeItem(LOCAL_STORAGE_KEY)
          window.location.reload();
        }}>
          Reload Application
        </button>
      </React.StrictMode>
    );
  }
})()

