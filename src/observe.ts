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

    if (!observer) {
        observer = new MutationObserver((mutationList) => {
            mutationList.forEach((mutation) => {
                const target = mutation.target
                const update = (element: string, value: string) => {
                    setTimeout(() => {
                        updateState(element, value)
                    }, delay)
                }

                if (target === homeElement) {
                    update("home", target.textContent || "")

                    return
                }

                if (target === awayElement) {
                    update("away", target.textContent || "")
                }

                if (target === outsElement) {
                    update("outs", target.textContent || "")
                }

                if (target === inningElement) {
                    update("inning", target.textContent || "")
                }

                if (target === strikesElement) {
                    update("strikes", target.textContent || "")
                }

                if (target === ballsElement) {
                    update("balls", target.textContent || "")
                }
            })
        })
    }
}
