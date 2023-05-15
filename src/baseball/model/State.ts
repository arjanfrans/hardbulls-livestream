import { BaseEnum } from "./BasesEnum"
import { InningValue } from "./Inning"

export interface State {
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
    hideBases: false
    hideCounts: false
    homeGradient: [string, string]
    awayGradient: [string, string]
    layoutGradient: [string, string]
    backgroundGradient: [string, string]
}
