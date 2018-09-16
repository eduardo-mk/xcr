import * as axios from 'axios'
import debouncing from "../musicApp/components/debouncing"
const ACTION = {
    CHECK_ARTIST: "CHECK_ARTIST",
    CHECK_TRACK: "CHECK_TRACK"
}
let getDeb = debouncing(axios.get, 500)
function checkByArtist(artistName) {
    console.log(`Action checkByArtist ${artistName}`)
    return (dispatch) => {
        console.log('Thunk')
        axios.get(`/music/artist`, {
            params: {
                name: artistName 
            }
        }).then(res => {
            console.log(res)
            dispatch({ type: ACTION.CHECK_ARTIST, payload: artistName })
        })


    }
}

export {
    ACTION,
    checkByArtist
}