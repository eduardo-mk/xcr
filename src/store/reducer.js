import { ACTION } from './actions'
let defaultValues = [];
function musicReducer(state = defaultValues, action) {
    console.log('Reducer')

    switch (action.type) {
        case ACTION.CHECK_ARTIST:
            console.log('Action in reducer received')
            return { ...state, byArtist: action.payload }
        default:
            return state
    }
}

export {
    musicReducer
}