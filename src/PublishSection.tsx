import React from "react";
import { State } from "./baseball/model/State";
import { publishCss, publishTickerUrl, refreshBrowsers } from "./service/obs/obs-api";
import { WBSC_OVERLAY_PLAYER } from "./wbsc-overlay-players";
import { WBSC_OVERLAY_BOX } from "./wbsc-overlay-box";
import { OVERLAY_SPONSORS} from './sponsor-overlay'
import { WBSC_OVERLAY_LINEUP } from "./wbsc-overlay-lineup";

interface Props {
  state: State,
}

export const PublishSection = ({ state }: Props) => {
  return (
    <div>
      <div>
        <h3>Publish to OBS Studio</h3>
        <div>
          <button onClick={() => publishCss(WBSC_OVERLAY_BOX(state), WBSC_OVERLAY_PLAYER(state),  OVERLAY_SPONSORS(state), WBSC_OVERLAY_LINEUP(state))}>Publish CSS</button>
          <button onClick={() => publishTickerUrl(state.tickerUrl)}>Publish Ticker URL</button>
          <button onClick={() => refreshBrowsers()}>Refresh Browsers</button>
        </div>
      </div>
    </div>
  );
};
