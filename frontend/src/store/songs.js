import { csrfFetch } from "./csrf";

const GET_SONGS = 'songs/GET_SONGS';
const CREATE_SONG = 'songs/CREATE_SONG';
const UPDATE_SONG = 'songs/UPDATE_SONG';
const REMOVE_SONG = 'songs/REMOVE_SONG';
const SHOW_SONG = 'songs/SHOW_SONG';

const getSongsAction = (songs) => ({
    type: GET_SONGS,
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
const removeSongAction = (id) => ({
    type: REMOVE_SONG,
    id
});
const showSongAction = (song) => ({
    type: SHOW_SONG,
    song
})

export const getSongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/songs');

    if (res.ok) {
        const data = await res.json();
        dispatch(getSongsAction(data.Songs));
        return data.Songs;
    }
};

export const createAddSong = (data) => async (dispatch) => {
    const { albumId } = data;

    const res = await csrfFetch(`/api/albums/${albumId}/songs`, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const newSong = await res.json();
        dispatch(createSongAction(newSong));
        return newSong;
    };
};

export const updateSong = (data) => async (dispatch) => {
    const { songId } = data;

    const res = await csrfFetch(`/api/songs/${songId}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const updatedSong = await res.json();
        dispatch(updateSongAction(updatedSong));
        return updatedSong;
    }
};

export const removeSong = (songId) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${songId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        const deletedSong = await res.json();
        dispatch(removeSongAction(songId));
        return deletedSong;
    }
};

export const showSong = (songId) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${songId}`);

    if(res.ok) {
        const song = await res.json();
        dispatch(showSongAction(song));
        return song;
    }
}

const initSongData = {};

const songsReducer = (state = initSongData, action) => {
    let newState;
    switch (action.type) {
        case (GET_SONGS):
            newState = { ...state }
            action.payload.forEach((song) => {
                newState[song.id] = song;
            })
            return newState
        case (CREATE_SONG):{
            return {
                ...state,
                [action.song.id]: action.song
            }
        }
        case (UPDATE_SONG):
            newState = { ...state };
            newState[action.song.id] = action.song
            return newState;
        case (REMOVE_SONG):
            newState = { ...state };
            delete newState[action.id];
            return newState;
        case (SHOW_SONG):
            newState = {...state};
            newState[action.song.id] = action.song;
            return newState
        default:
            return state;
    }
};

export default songsReducer;
