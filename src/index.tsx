import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './baseball/index.css';
import App from './App';

import OBSWebSocket from 'obs-websocket-js';

const rootElement = document.createElement('_scoreboard_root')
const root = ReactDOM.createRoot(
  rootElement
);

document.body.prepend(rootElement);

(async () => {
  let obs;
  try {
    obs = new OBSWebSocket();

    await obs.connect('ws://127.0.0.1:4455');
  } catch (error) {
    console.error('No obs connection found', error);
    obs = undefined;
  }

  root.render(
    <React.StrictMode>
      <App obs={obs} />
    </React.StrictMode>
  );
})()
