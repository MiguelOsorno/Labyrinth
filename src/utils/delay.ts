

export const Delay = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(null)
        }, 500)
    })
}