import OBSWebSocket from "obs-websocket-js"

let obs: OBSWebSocket | undefined = undefined

export const getObs = () => {
    return obs
}

export const setObs = async (obsSocket: string) => {
    if (!obs) {
        obs = new OBSWebSocket()
    }

    try {
        await obs.disconnect()

        await obs.connect(obsSocket)
    } catch (err) {
        console.error(err)
        obs = undefined
    }
}
