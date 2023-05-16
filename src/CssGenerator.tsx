import React from "react";
import { State } from "./baseball/model/State";
import { WBSC_OVERLAY_PLAYER } from "./wbsc-overlay-players";
import { WBSC_OVERLAY_BOX } from "./wbsc-overlay-box";

import OBSWebSocket from 'obs-websocket-js';

interface Props {
  state: State,
  obs?: OBSWebSocket
}

export const CssGenerator = ({ state, obs }: Props) => {
  const scoreBoxCss = WBSC_OVERLAY_BOX(state);
  const playerBoxCss = WBSC_OVERLAY_PLAYER(state);

  const saveToObs = async () => {
    if (obs) {
      await obs.callBatch([
        {
          requestType: 'SetInputSettings',
          requestData: {
            inputName: 'hb_score', inputSettings: {
              css: scoreBoxCss
            }
          }
        },
        {
          requestType: 'SetInputSettings',
          requestData: {
            inputName: 'hb_players', inputSettings: {
              css: playerBoxCss
            }
          }
        }
      ]);

    } else {
      console.error('OBS is not connected')
    }
  }

  return (
    <div>
      <div>
        <div>Score Box</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <textarea readOnly={true} rows={10} cols={50}
            value={scoreBoxCss} />
        </div>
        <div>Player Box</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <textarea readOnly={true} rows={10} cols={50}
            value={playerBoxCss} />
        </div>
        <div>
          <button onClick={() => saveToObs()}>Save to OBS</button>
        </div>
      </div>
    </div>
  );
};
