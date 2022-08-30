import { csrfFetch } from "./csrf";

const GET_SONGS = 'songs/GET_SONGS';

const getSongsAction = (songs) => ({
    type: GET_SONGS,
    payload: songs
})

export const getSongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/songs');

    if(res.ok){
        const songs = await res.json();
        // console.log('songs', songs);
        dispatch(getSongsAction(songs));
        return songs;
    }
}

const initUserData = { user: null };

const songsReducer = (state = initUserData, action) => {
    let newState;
    switch (action.type) {
        case (GET_SONGS):
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState
        default:
            return state;
    }
};

export default songsReducer;
