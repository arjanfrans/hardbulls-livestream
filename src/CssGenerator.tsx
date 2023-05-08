import React from "react";
import { State } from "./baseball/model/State";
import { WBSC_OVERLAY_PLAYER } from "./wbsc-overlay-players";
import { WBSC_OVERLAY_BOX } from "./wbsc-overlay-box";

interface Props {
  state: State,
}

export const CssGenerator = ({state}: Props) => {
  return (
    <div>
      <div>
        <div>Score Box</div>
        <textarea readOnly={true} rows={10} cols={50} value={WBSC_OVERLAY_BOX(state.home, state.away, state.homeLogo || '', state.awayLogo || '', state.filterColor, state.awayGradient, state.homeGradient, state.layoutGradient, state.backgroundGradient)}/>
        <div>Player Box</div>
        <textarea readOnly={true} rows={10} cols={50} value={WBSC_OVERLAY_PLAYER()}/>
      </div>
    </div>
  )
}
