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
    const countsElement = addElement(settings, "counts")
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
                        const [outs] = (target.textContent || "").split(" ")

                        updateState("outs", outs || "")
                    }, delay)
                }

                if (target === inningElement) {
                    setTimeout(() => {
                        updateState("inning", target.textContent || "")
                    }, delay)
                }

                if (target === countsElement) {
                    setTimeout(() => {
                        const [balls, strikes] = (target.textContent || "").split("-")
                        updateState("strikes", strikes || "")
                        updateState("balls", balls || "")
                    }, delay)
                }
            })
        })
    }
}
