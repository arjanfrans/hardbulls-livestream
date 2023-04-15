import { ObserveSettings } from "./ObserveSettings"

let observer: MutationObserver | undefined = undefined

const addElement = (settings: ObserveSettings, key: keyof ObserveSettings) => {
    const selector = settings[key]
    const element = selector && document.querySelector(selector)

    if (element && observer) {
        observer.observe(element, { subtree: true, childList: true })

        return element
    }
}

export const observeElements = (
    delay: number,
    settings: ObserveSettings,
    updateState: (key: string, value: string) => void
) => {
    const homeElement = addElement(settings, "home")
    const awayElement = addElement(settings, "away")
    const outsElement = addElement(settings, "outs")
    const inningElement = addElement(settings, "inning")
    const strikesElement = addElement(settings, "strikes")
    const ballsElement = addElement(settings, "balls")
    // const base1Element = addElement(settings, "base1")
    // const base2Element = addElement(settings, "base2")
    // const base3Element = addElement(settings, "base3")

    if (!observer) {
        observer = new MutationObserver((mutationList) => {
            mutationList.forEach((mutation) => {
                const target = mutation.target

                if (target === homeElement) {
                    setTimeout(() => {
                        updateState("home", target.textContent || "")
                    }, delay)

                    return
                }

                if (target === awayElement) {
                    setTimeout(() => {
                        updateState("away", target.textContent || "")
                    }, delay)
                }

                if (target === outsElement) {
                    setTimeout(() => {
                        updateState("outs", target.textContent || "")
                    }, delay)
                }

                if (target === inningElement) {
                    setTimeout(() => {
                        updateState("inning", target.textContent || "")
                    }, delay)
                }

                if (target === strikesElement) {
                    setTimeout(() => {
                        updateState("strikes", target.textContent || "")
                    }, delay)
                }

                if (target === ballsElement) {
                    setTimeout(() => {
                        updateState("balls", target.textContent || "")
                    }, delay)
                }
            })
        })
    }
}
