import * as axios from 'axios'

const ACTION = {
    CHECK_ARTIST: "CHECK_ARTIST",
    CHECK_TRACK: "CHECK_TRACK"
}

function checkByArtist(artistName) {
    console.log(`Action checkByArtist ${artistName}`)
    return (dispatch) => {
        console.log('Thunk')
        axios.get(`/music/artist`, {
            params: {
                name: artistName
            }
        })
            .then(res => {
                let { data: { results } } = res
                console.log(results)
                dispatch({ type: ACTION.CHECK_ARTIST, payload: artistName })
            })


    }
}

export {
    ACTION,
    checkByArtist
}