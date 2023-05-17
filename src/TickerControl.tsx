import React from "react";
import { State } from "./baseball/model/State";
import { getObs } from "./obs";

interface Props {
  state: State,
  handleChange: <T extends keyof State>(key: T, value: State[T]) => void;
}

export const TickerControl = ({ handleChange, state }: Props) => {
  const saveToObs = async () => {
    console.log(await getObs()?.call("GetInputDefaultSettings", {
      inputKind: "browser_source"
    }));
    // await obs.callBatch([
    //   {
    //     requestType: 'SetInputSettings',
    //     requestData: {
    //       inputName: 'hb_score', inputSettings: {
    //         css: scoreBoxCss
    //       }
    //     }
    //   },
    //   {
    //     requestType: 'SetInputSettings',
    //     requestData: {
    //       inputName: 'hb_players', inputSettings: {
    //         css: playerBoxCss
    //       }
    //     }
    //   }
    // ]);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          Ticker URL
        </div>
        <input type="text" value={state.tickerUrl}
               onChange={(event) => handleChange("tickerUrl", event.currentTarget.value)}
               size={20}
        />
        <div>
          <button onClick={() => saveToObs()}>Save Ticker URL to OBS</button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          Home Team ID
        </div>
        <input
          type="text"
          value={state.homeTeamId}
          onChange={(event) => handleChange("homeTeamId", event.currentTarget.value)}
        />
        <div>
          Away Team ID
        </div>
        <input
          type="text"
          value={state.awayTeamId}
          onChange={(event) => handleChange("awayTeamId", event.currentTarget.value)}
        />
      </div>

    </div>
  );
};
