import { State } from "./baseball/model/State"
import { DEFAULT_STATE } from "./default-state"
import { convertFileToBase64 } from "./service/file-to-base64"
import { getBlob, getResizedImage } from "./service/assets"

export const LOCAL_STORAGE_KEY = "state"

export const saveState = (state: State) => {
    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({
            ...state,
            font: {
                ...state.font,
                data: undefined,
            },
            homeLogo: {
                ...state.homeLogo,
                data: state.homeLogo?.name ? undefined : state.homeLogo?.data,
            },
            awayLogo: {
                ...state.awayLogo,
                data: state.awayLogo?.name ? undefined : state.awayLogo?.data,
            },
        })
    )
}

export const getLocaleStorageValue = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY)
}

export const enhanceState = async (state: State) => {
    if (state.font && state.font.name) {
        if (!state.font.data) {
            state.font.data = await convertFileToBase64(await getBlob(`fonts/${state.font.name}.woff2`))
        }

        const font = new FontFace(state.font.name, `url("${state.font.data}") format("woff2")`)
        const loadedFont = await font.load()

        document.fonts.add(loadedFont)
    }

    if (state.homeLogo && state.homeLogo.name && !state.homeLogo.data) {
        state.homeLogo.data = await getResizedImage(`teams/${state.homeLogo.name}`)
    }

    if (state.awayLogo && state.awayLogo.name && !state.awayLogo.data) {
        state.awayLogo.data = await getResizedImage(`teams/${state.awayLogo.name}`)
    }

    return state
}

export const loadState = async () => {
    const savedState = getLocaleStorageValue()

    let parsedSavedState = null

    try {
        parsedSavedState = savedState && (JSON.parse(savedState) as State)
    } catch (error) {}

    const state = parsedSavedState ? parsedSavedState : DEFAULT_STATE

    return enhanceState(state)
}
