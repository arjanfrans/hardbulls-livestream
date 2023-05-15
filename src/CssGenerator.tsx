import React from "react";
import { State } from "./baseball/model/State";
import { WBSC_OVERLAY_PLAYER } from "./wbsc-overlay-players";
import { WBSC_OVERLAY_BOX } from "./wbsc-overlay-box";

interface Props {
  state: State,
}

export const CssGenerator = ({ state }: Props) => {
  const scoreBoxCss = WBSC_OVERLAY_BOX(state.home, state.away, state.homeLogo || "", state.awayLogo || "", state.filterColor, state.awayGradient, state.homeGradient, state.layoutGradient, state.backgroundGradient);
  const playerBoxCss = WBSC_OVERLAY_PLAYER(state.homeTeamId, state.awayTeamId, state.home, state.away, state.homeLogo || "", state.awayLogo || "", state.filterColor, state.awayGradient, state.homeGradient, state.layoutGradient, state.backgroundGradient);

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
      </div>
    </div>
  );
};
