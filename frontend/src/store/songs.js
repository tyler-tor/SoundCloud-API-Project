import { csrfFetch } from "./csrf";

const GET_SONGS = 'songs/GET_SONGS';
const CREATE_SONG = 'songs/CREATE_SONG';
const GET_MY_SONGS = 'songs/GET_MY_SONGS';
const UPDATE_SONG = 'songs/UPDATE_SONG';
const REMOVE_SONG = 'songs/REMOVE_SONG';

const getSongsAction = (songs) => ({
    type: GET_SONGS,
    payload: songs
});

const getMySongs = (songs) => ({
    type: GET_MY_SONGS,
    payload: songs
});

const createSongAction = (song) => ({
    type: CREATE_SONG,
    song
});

const updateSongAction = (song) => ({
    type: UPDATE_SONG,
    song
});
const removeSongAction = (songId) => ({
    type: REMOVE_SONG,
    songId
})

export const getSongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/songs');

    if(res.ok){
        const data = await res.json();
        dispatch(getSongsAction(data.Songs));
        return data.Songs;
    }
};

export const mySongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/my/songs');
    // console.log(res)

    if(res.ok){
        const data = await res.json();
        dispatch(getMySongs(data.Songs));
        return data;
    };
};


export const createAddSong = (data) => async(dispatch) => {
    const {albumId} = data;

    const res = await csrfFetch(`/api/albums/${albumId}/songs`, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if(res.ok){
        const newSong = await res.json();
        dispatch(createSongAction(newSong));
        return newSong;
    };
};

export const updateSong = (data) => async (dispatch) => {
    const {songId} = data;

    const res = await csrfFetch(`/api/songs/${songId}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });

    if(res.ok){
        const updatedSong = await res.json();
        dispatch(updateSongAction(updatedSong));
        return updatedSong;
    }
};

export const removeSong = (songId) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${songId}`, {
        method: 'DELETE'
    });

    if(res.ok){
        const deletedSong = await res.json();
        dispatch(removeSongAction(songId));
        return deletedSong
    }
}

const initSongData = {
    allSongs: [],
    mySongs: []
};

const songsReducer = (state = initSongData, action) => {
    let newState;
    switch (action.type) {
        case (GET_MY_SONGS):
            // newState = Object.assign({}, state);
            // newState = {...state}
            // action.payload.forEach(song => {
            //     newState.mySongs[song.id] = song[id]
            // });
            // console.log(newState.mySongs)
            newState = {...state};
            newState.mySongs = {...action.payload};

            return newState
        case (GET_SONGS):
            // newState = Object.assign({}, state);
            newState = {...state};
            newState.allSongs = {...action.payload};
            return newState
        case (CREATE_SONG):
            // newState = Object.assign({}, state);
            newState = {...state};
            newState.mySongs[action.song.id] = {...action.song};
            return newState;
        case (UPDATE_SONG):
            // newState = Object.assign({}, state);
            newState = {...state};
            newState.mySongs[action.song.id] = {...action.song};
            return newState;
        case (REMOVE_SONG):
            // newState = Object.assign({}, state);
            newState = {...state};
            delete newState.mySongs[action.songId];
            return newState
        default:
            return state;
    }
};

export default songsReducer;
