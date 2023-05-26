import React from "react";
import { State } from "./baseball/model/State";

interface Props {
  state: State,
  handleChange: <T extends keyof State>(key: T, value: State[T]) => void;
}

export const TickerControl = ({ handleChange, state }: Props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          Ticker URL
        </div>
        <input type="text"
               value={state.tickerUrl}
               onChange={(event) => handleChange("tickerUrl", event.currentTarget.value)}
               size={20}
        />
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          Auto Refresh Time
        </div>
        <input type="time" value={state.refreshTime || ''} onChange={(event) => {
          handleChange("refreshTime", event.target.value);
        }} />
        <button onClick={() => handleChange("refreshTime", undefined)}>Clear Refresh Time</button>
      </div>

    </div>
  );
};
