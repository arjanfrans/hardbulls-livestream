import React from "react";
import { State } from "./baseball/model/State";
import { WBSC_OVERLAY_PLAYER } from "./wbsc-overlay-players";
import { WBSC_OVERLAY_BOX } from "./wbsc-overlay-box";
import { getObs } from "./obs";

interface Props {
  state: State,
}

export const PublishSection = ({ state }: Props) => {
  const refreshBrowsers = async () => {
    await getObs()?.callBatch([
      {
        requestType: "SetInputSettings",
        requestData: {
          inputName: "hb_score",
          inputSettings: {
            restart_when_active: true
          }
        }
      },
      {
        requestType: "SetInputSettings",
        requestData: {
          inputName: "hb_players",
          inputSettings: {
            restart_when_active: true
          }
        }
      }
    ]);

    setTimeout(async () => {
      await getObs()?.callBatch([
        {
          requestType: "SetInputSettings",
          requestData: {
            inputName: "hb_score",
            inputSettings: {
              restart_when_active: false
            }
          }
        },
        {
          requestType: "SetInputSettings",
          requestData: {
            inputName: "hb_players",
            inputSettings: {
              restart_when_active: false
            }
          }
        }
      ]);
    }, 1000)
  };

  const publishCss = async () => {
    await getObs()?.callBatch([
      {
        requestType: "SetInputSettings",
        requestData: {
          inputName: "hb_score", inputSettings: {
            css: WBSC_OVERLAY_BOX(state)
          }
        }
      },
      {
        requestType: "SetInputSettings",
        requestData: {
          inputName: "hb_players", inputSettings: {
            css: WBSC_OVERLAY_PLAYER(state)
          }
        }
      }
    ]);
  };

  const publishTickerUrl = async () => {
    await getObs()?.callBatch([
      {
        requestType: "SetInputSettings",
        requestData: {
          inputName: "hb_score",
          inputSettings: {
            url: state.tickerUrl
          }
        }
      },
      {
        requestType: "SetInputSettings",
        requestData: {
          inputName: "hb_players",
          inputSettings: {
            url: state.tickerUrl
          }
        }
      }
    ]);
  };

  return (
    <div>
      <div>
        <h3>Publish to OBS Studio</h3>
        <div>
          <button onClick={() => publishCss()}>Publish CSS</button>
          <button onClick={() => publishTickerUrl()}>Publish Ticker URL</button>
          <button onClick={() => refreshBrowsers()}>Refresh Browsers</button>
        </div>
      </div>
    </div>
  );
};
