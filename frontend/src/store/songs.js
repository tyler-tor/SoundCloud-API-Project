import { csrfFetch } from "./csrf";

const GET_SONGS = 'songs/GET_SONGS';
const CREATE_SONG = 'songs/CREATE_SONG';

const getSongsAction = (songs) => ({
    type: GET_SONGS,
    payload: songs
});

const createSongAction = (song) => ({
    type: CREATE_SONG,
    song
})

export const getSongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/songs');

    if(res.ok){
        const data = await res.json();
        dispatch(getSongsAction(data));
        return data;
    }
};

export const createAddSong = (data) => async(dispatch) => {
    const {albumId} = data;

    const res = await csrfFetch(`/api/albums/${albumId}/songs`, {
        method: 'POST',
        body: JSON.stringify(...data)
    });

    if(res.ok){
        const newSong = await res.json();
        dispatch(createSongAction(newSong));
        return newSong;
    };
};

const initSongData = {
    Songs: []
};

const songsReducer = (state = initSongData, action) => {
    let newState;
    switch (action.type) {
        case (GET_SONGS):
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState
        case (CREATE_SONG):
            newState = Object.assign({}, state);
            newState[action.song.id] = action.song;
            return newState
        default:
            return state;
    }
};

export default songsReducer;
