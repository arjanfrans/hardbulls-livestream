import { State } from "./baseball/model/State"
import { generateGradient } from "./service/css"

export const OVERLAY_SPONSORS = (state: State) => `
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

body {
    background-color: ${state.filterColor} !important;
    color: var(--font-color-dark);
}
.cd-section-content >div.cd-row:nth-child(1) .cd-sponsors-item::before {
    font-family: ${state.font?.name}, sans-serif;
    font-size: 20px;
    content: 'BULLS sponsored by';
    color: var(--font-color-dark);
    background: var(--layout-gradient);
    display: block;
    margin-right: -5px;
    margin-left: -5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 5px;
    margin-top: -5px;
}

.cd-section-content >div.cd-row:nth-child(1) .cd-sponsors-item {
    border: var(--default-border) !important;
    background: var(--background-gradient) !important;
    border: 2px solid black;
}

.owl-lazy {
    transition: none !important;
}

.cd-section-content >div.cd-row:nth-child(2) .cd-carousel-container .cd-tile-container{
	background: var(--background-gradient) !important;
	padding: 10px;
	margin-bottom: -10px;
	
}
.cd-section-content >div.cd-row:nth-child(2) .cd-carousel-container .owl-stage-outer {
	border: var(--default-border) !important;
}

.cd-section-content >div.cd-row:nth-child(2) .cd-carousel-container .owl-stage-outer::before {
    font-family: HudsonNYSemiBold, sans-serif;
    font-size: 20px;
    content: 'The Hard Bulls are sponsored by';
    color: var(--font-color-dark);
    background: var(--layout-gradient);
    display: block;
    padding-left: 10px;
    padding-right: 10px;
}


.cc-window, .cc-bottom {
	display: none !important;
}
`
