import { State } from "./baseball/model/State"

export const WBSC_OVERLAY_PLAYER = (state: State) => `
:root {
    --primary: #e20514;
    --bg-gray: #d3d3d3;
    --default-border: 2px solid gray;
    --home-drop-shadow: drop-shadow(2px 2px 0px ${state.homeLogoShadow[0]}88) drop-shadow(0px 0px 3px ${state.homeLogoShadow[1]});
    --away-drop-shadow: drop-shadow(2px 2px 0px ${state.awayLogoShadow[0]}88) drop-shadow(0px 0px 3px ${state.awayLogoShadow[1]});
    --font-color-light: ${state.fontColorLight};
    --font-color-dark: ${state.fontColorDark};
    --home-gradient: linear-gradient(0deg, ${state.homeGradient[0]}ff 0%, ${state.homeGradient[1]}ff 100%);
    --away-gradient: linear-gradient(0deg, ${state.awayGradient[0]}ff 0%, ${state.awayGradient[1]}ff 100%);
    --layout-gradient: linear-gradient(0deg, ${state.layoutGradient[0]}ff 0%, ${state.layoutGradient[1]}ff 100%);
    --background-gradient: linear-gradient(0deg, ${state.backgroundGradient[0]}ff 0%, ${state.backgroundGradient[1]}ff 100%);
}

@font-face {
    font-family: ${state.font?.name};
    src: url("${state.font?.data}") format("woff2");
}

body {
    background-color: ${state.filterColor} !important;
    font-family: ${state.font?.name}, sans-serif;
    color: var(--font-color-dark);
}

.single-player {
    padding: 0 !important;
    width: 100%;
}

.box-score-top-bar {
    height: 0;
}

.box-score-top-bar > div.left-box {
    display: none !important;
}

.box-score-top-bar > div.center-box {
    display: none !important;
}

.box-score-top-bar > div.right-box {
    display: none !important;
}

.game-info-plays {
    display: none !important;
}

.up-next-container {
    display: none !important;
}

.box-score-panel:nth-child(2) {
    max-width: 360px !important;
    width: 360px !important;
}

.box-score-panel:nth-child(3) {
    display: none !important;
}

.box-score-panel:nth-child(4) {
    display: none !important;
}

.active-panel {
    background-color: revert !important;
    height: min-content !important;
}

.actual-panel {
    height: min-content !important;
}

.game-info {
    height: revert !important;
    overflow: hidden !important;
}



#app>div {
    background-image: none !important;
    background-color: ${state.filterColor} !important;
}

.live-data {
    background-color: ${state.filterColor} !important;
}

.innings-table {
    display: none !important;
}

div.player-image.player-picture {
    display: none !important;
}


.player-stats p {
    display: flex;
    justify-content: space-between;
    align-items: center;
 }

 .player-stats > p > strong {
    font-family: ${state.font?.name}, sans-serif; 
    font-size: 24px;
    max-width: 300px;
 } 

div.actual-players {
    margin-top: 20px !important;
    padding: 0 !important;
    border: var(--default-border);
    background: var(--background-gradient);
}

.actual-players p {
    margin: 0;
}

div.single-player:nth-child(1) div.player-stats {
    border-bottom: 0;
    margin-bottom: 16px;
}

.player-stats {

    width: 100%;
    background: var(--background-gradient);
    font-size: 28px;  
}

.player-stats > p:nth-child(2) {
    background: var(--layout-gradient);
    font-size: 22px;
}

.player-avg {
    background: var(--layout-gradient);
    color: var(--font-color-dark) !important;
    font-size: 20px !important;
}

.actual-players .player-stats > a {
    display: none !important;
}

div.actual-players div.player-stats > a {
    display: none !important;
}

div.actual-players div.player-stats > p.role-and-stats {
    color: var(--font-color-light) !important;
    font-size: 22px !important;
    font-weight: bold !important;
    text-shadow: 1px 1px black;
    position: relative;
}

div.player-stats:has(> a[href*="/teams/${state.homeTeamId}"]) > .role-and-stats::after {
    content: "";
    background-image: url("${state.homeLogo}");
    background-size: contain;  
    background-repeat: no-repeat;
    position: absolute;
    margin-top: -2px;
    padding: 20px;
    right: 8px;
    filter: var(--home-drop-shadow);
}

div.player-stats:has(> a[href*="/teams/${state.awayTeamId}"]) > .role-and-stats::after {
    content: "";
    background-image: url("${state.awayLogo}");
    background-size: contain;  
    background-repeat: no-repeat;
    position: absolute;
    margin-top: -2px;
    padding: 20px;
    right: 8px;
    filter: var(--away-drop-shadow);
}

div.actual-players div.player-stats > p {
    width: 100%;
    padding-left: 4px;
    padding-right: 4px;
}

div.event-banner {
    display: none !important;
}

#cookie-bar, #cookie-bar-prompt {
    display: none !important;
}

div.player-stats:has(> a[href*="/teams/${state.homeTeamId}"]) > .role-and-stats {
    background: var(--home-gradient);
}

div.player-stats:has(> a[href*="/teams/${state.awayTeamId}"]) > .role-and-stats {
    background: var(--away-gradient);
}
`
