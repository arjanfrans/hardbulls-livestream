const arrayBufferToString = (buffer: ArrayBuffer | string): string => {
    if (typeof buffer === "string") {
        return buffer
    }

    return String.fromCharCode.apply(null, Array.from(new Uint16Array(buffer)))
}
const convertFileToBase64 = (file: Blob): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onload = () => {
            resolve(reader.result ? arrayBufferToString(reader.result) : undefined)
        }
        reader.onerror = (error) => {
            reject(error)
        }
    })
}
export const convertFilesToBase64 = async (files: FileList): Promise<string[]> => {
    const base64Files: string[] = []

    for (const file of Array.from(files)) {
        const base64File = await convertFileToBase64(file)

        if (base64File) {
            base64Files.push(base64File)
        }
    }

    return base64Files
}
