import { InningHalfEnum } from "./baseball/model/InningHalfEnum"
import { State } from "./baseball/model/State"

export const DEFAULT_OBS_SOCKET = "ws://127.0.0.1:4455"

export const DEFAULT_STATE: State = {
    bases: [],
    home: "HB",
    away: "HB",
    score: [0, 0],
    inning: {
        value: 0,
        half: InningHalfEnum.TOP,
    },
    outs: 0,
    strikes: 0,
    balls: 0,
    homeLogo: undefined,
    awayLogo: undefined,
    filterColor: "#00ff00",
    awayTeamId: "",
    homeTeamId: "24492",
    hideBases: false,
    hideCounts: false,
    homeGradient: ["#dd0808", "#ff5c5c"],
    awayGradient: ["#6e6e6e", "#828282"],
    layoutGradient: ["#b0b0b0", "#cfcfcf"],
    backgroundGradient: ["#000000", "#474747"],
    homeLogoShadow: ["#000000", "#000000"],
    awayLogoShadow: ["#000000", "#000000"],
    fontColorLight: "#f3f3f3",
    fontColorDark: "#333333",
    obsSocket: DEFAULT_OBS_SOCKET,
    tickerUrl: "",
    activeBaseColor: "#ffd300",
    inactiveBaseColor: "#8c8b7f",
    refreshTime: undefined,
}
