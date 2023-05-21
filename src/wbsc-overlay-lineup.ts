import { State } from "./baseball/model/State"
import { generateGradient } from "./service/css"

export const WBSC_OVERLAY_LINEUP = (state: State) => `
:root {
    --primary: #e20514;
    --bg-gray: #d3d3d3;
    --default-border: 2px solid gray;
    --home-drop-shadow: drop-shadow(2px 2px 0px ${state.homeLogoShadow[0]}88) drop-shadow(0px 0px 3px ${
    state.homeLogoShadow[1]
});
    --away-drop-shadow: drop-shadow(2px 2px 0px ${state.awayLogoShadow[0]}88) drop-shadow(0px 0px 3px ${
    state.awayLogoShadow[1]
});
    --font-color-light: ${state.fontColorLight};
    --font-color-dark: ${state.fontColorDark};
    --home-gradient: ${generateGradient(state.homeGradient)};
    --away-gradient: ${generateGradient(state.awayGradient)};
    --layout-gradient: ${generateGradient(state.layoutGradient)};
    --background-gradient: ${generateGradient(state.backgroundGradient)};
}

@font-face {
    font-family: ${state.font?.name};
    src: url("${state.font?.data}") format("woff2");
}

html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
}

body {
    background-color: #0000ff !important;
    font-family: EurostileBold, sans-serif;
    color: var(--font-color-dark);
    margin: 0;
}

.game-info {
	display: none !important;
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

.box-score-panel:nth-child(2) {
	display: none !important;
}

.box-score-panel .mobile-menu {
	display: none !important;
}

.box-score-panel .react-tabs__tab-list {
	display: none !important;
}

.box-score-panel .stats {
	display: none !important;
}

.box-score-panel .game-notes {
	display: none !important;
}

.box-score-page .box-score-table table tbody tr, .schedule-and-results-page .box-score-table table tbody tr {
	margin-left: 0 !important;
	margin-right: 0 !important;
	margin-top: 4px !important;
	margin-bottom: 4px !important;
	padding-left: 4px;
	padding-right: 4px;
}

td.player-index {
	text-align: center;
	font-size: 20px !important;
}

.box-score-page .box-score .box-score-panel:not(:nth-child(2)), .schedule-and-results-page .box-score .box-score-panel:not(:nth-child(2)) {
    display: flex !important;
}

.box-score-page .box-score-table table .heading, .schedule-and-results-page .box-score-table table .heading {
	border-bottom: 0 !important;
	margin: 0 !important;
}

.box-score-table table {
	background: var(--background-gradient) !important;
	border: var(--default-border);
}

.box-score-table {
	font-family: EurostileBold !important;
}

.box-score-table tbody > tr{

	background: var(--layout-gradient);
}

.box-score-table thead > tr > th {
	color: var(--font-color-light) !important;
}

.box-score-table thead > tr {
	background: var(--home-gradient) !important;
	color: var(--font-color-dark);
}

.box-score-table tbody > tr > td {
	color: var(--font-color-dark) !important;
}

.box-score-page .box-score, .schedule-and-results-page .box-score {
	height: revert !important;
}

div > table:nth-child(4) > thead > tr > th.player-fullname::before
{
	content: 'Pitcher';

}

div > table:nth-child(1) > thead > tr > th.player-fullname::before {
	content: 'Batter';
}

#app>div {
    background-image: none !important;
    background-color: #0000ff !important;
}

div.player-stats:has(> a[href*="/teams/24492"]) > .role-and-stats::after {
    content: "";
}

div.player-stats:has(> a[href*="/teams/24475"]) > .role-and-stats::after {
    content: "";
}


div.event-banner {
    display: none !important;
}

#cookie-bar, #cookie-bar-prompt {
    display: none !important;
}

div.player-stats:has(> a[href*="/teams/24492"]) > .role-and-stats {
    background: var(--home-gradient);
}

div.player-stats:has(> a[href*="/teams/24475"]) > .role-and-stats {
    background: var(--away-gradient);
}
`
