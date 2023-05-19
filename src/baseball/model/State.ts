import { BaseEnum } from "./BasesEnum"
import { InningValue } from "./Inning"
import { Font } from "./Font"
import { Gradient } from "./Gradient"
import { Image } from "./Image"

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
    homeLogo?: Image
    awayLogo?: Image
    filterColor: string
    hideBases: boolean
    hideCounts: boolean
    homeGradient: Gradient
    awayGradient: Gradient
    layoutGradient: Gradient
    backgroundGradient: Gradient
    homeLogoShadow: [string, string]
    awayLogoShadow: [string, string]
    fontColorLight: string
    fontColorDark: string
    activeBaseColor: string
    inactiveBaseColor: string
    activeInningColor: string
    inactiveInningColor: string
    font?: Font
    refreshTime?: string
}
