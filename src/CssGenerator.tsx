import React from "react";
import { State } from "./baseball/model/State";
import { WBSC_OVERLAY_PLAYER } from "./wbsc-overlay-players";
import { WBSC_OVERLAY_BOX } from "./wbsc-overlay-box";
import { OVERLAY_SPONSORS} from './sponsor-overlay'
import { WBSC_OVERLAY_LINEUP } from "./wbsc-overlay-lineup";

interface Props {
  state: State,
}

export const CssGenerator = ({ state }: Props) => {
  const scoreBoxCss = WBSC_OVERLAY_BOX(state);
  const playerBoxCss = WBSC_OVERLAY_PLAYER(state);
  const sponsorBoxCss = OVERLAY_SPONSORS(state);
  const lineupBoxCss = WBSC_OVERLAY_LINEUP(state);

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
        <div>Sponsor Box</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <textarea readOnly={true} rows={10} cols={50}
                    value={sponsorBoxCss} />
        </div>
        <div>Lineup Box</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <textarea readOnly={true} rows={10} cols={50}
                    value={lineupBoxCss} />
        </div>
      </div>
    </div>
  );
};
