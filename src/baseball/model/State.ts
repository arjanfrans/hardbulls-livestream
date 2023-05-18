import { BaseEnum } from "./BasesEnum"
import { InningValue } from "./Inning"
import { Font } from "./Font"

export interface State {
    obsSocket: string
    tickerUrl: string
    bases: BaseEnum[]
    home: string
    away: string
    homeTeamId: string
    awayTeamId: string
    score: [number, number]
    inning: InningValue
    outs: number
    strikes: number
    balls: number
    homeLogo?: string
    awayLogo?: string
    filterColor: string
    hideBases: boolean
    hideCounts: boolean
    homeGradient: [string, string]
    awayGradient: [string, string]
    layoutGradient: [string, string]
    backgroundGradient: [string, string]
    homeLogoShadow: [string, string]
    awayLogoShadow: [string, string]
    fontColorLight: string
    fontColorDark: string
    activeBaseColor: string
    inactiveBaseColor: string
    font?: Font
    refreshTime?: string
}
