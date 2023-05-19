import OBSWebSocket from "obs-websocket-js"

let obsClient: OBSWebSocket | undefined = undefined

export const getObs = () => {
    return obsClient
}

export const setObs = async (obsSocket: string) => {
    if (!obsClient) {
        obsClient = new OBSWebSocket()
    }

    try {
        await obsClient.disconnect()

        await obsClient.connect(obsSocket)
    } catch (err) {
        console.error(err)
        obsClient = undefined
    }
}
