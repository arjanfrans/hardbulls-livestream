import { BaseEnum } from "./BasesEnum"
import { InningValue } from "./Inning"
import { ObserveSettings } from "../../ObserveSettings"

export interface State {
    bases: BaseEnum[]
    home: string
    away: string
    score: [number, number]
    inning: InningValue
    outs: number
    strikes: number
    balls: number
    homeLogo?: string
    awayLogo?: string
    observe: boolean
    observerDelay: number
    filterColor: string
    hideBases: false
    hideCounts: false
    observeSettings: ObserveSettings
}
