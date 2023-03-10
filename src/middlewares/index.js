export const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {

    const featured = [{ name: 'Oshawott' }, ...actionInfo.action.payload]
    const updateActionInfo = {
        ...actionInfo,
        action: {
            ...actionInfo.action,
            payload: featured
        }
    }
    next(updateActionInfo)
}

export const nameUpperCase = (store) => (next) => (actionInfo) => {

    const featured = [
         ...actionInfo.action.payload.map(
            pokemon => ({
                ...pokemon,
                 name: pokemon.name.charAt(0).toUpperCase() + 
                        pokemon.name.slice(1)
            })
        )
    ]
    const updateActionInfo = {
        ...actionInfo,
        action: {
            ...actionInfo.action,
            payload: featured
        }
    }
    next(updateActionInfo)
}
