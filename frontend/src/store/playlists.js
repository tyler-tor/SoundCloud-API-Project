import { csrfFetch } from "./csrf";

const GET_PLAYLISTS = 'playlists/GET_PLAYLISTS';
const CREATE_PLAYLIST = 'playlists/CREATE_PLAYLIST';
const UPDATE_PLAYLIST = 'playlists/UPDATE_PLAYLIST';
const DELETE_PLAYLIST = 'playlists/DELETE_PLAYLIST';
const SHOW_PLAYLIST = 'playlists/SHOW_PLAYLIST';

const getPlaylistsAction = (playlists) => ({
    type: GET_PLAYLISTS,
    payload: playlists
});

const createPlaylistAction = (playlist) => ({
    type: CREATE_PLAYLIST,
    playlist
});

const updatePlaylistAction = (playlist) => ({
    type: UPDATE_PLAYLIST,
    playlist
});

const deletePlaylistAction = (playlistId) => ({
    type: DELETE_PLAYLIST,
    playlistId
});

const showPlaylistAction = (playlist) => ({
    type: SHOW_PLAYLIST,
    playlist
});

export const getPlaylists = () => async (dispatch) => {
    const res = await csrfFetch('/api/playlists');

    if (res.ok) {
        const playlists = await res.json();
        dispatch(getPlaylistsAction(playlists));
        return playlists;
    }
};

export const createPlaylist = (playlist) => async (dispatch) => {
    const res = await csrfFetch('/api/playlists', {
        method: 'POST',
        body: JSON.stringify(playlist)
    });

    if (res.ok) {
        const newPlaylist = await res.json();
        dispatch(createPlaylistAction(newPlaylist));
        return newPlaylist;
    }
};

export const updatePlaylist = (data) => async (dispatch) => {
    const { playlistId } = data;
    const res = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const updatedPlaylist = await res.json();
        dispatch(updatePlaylistAction(updatedPlaylist));
        return updatedPlaylist;
    }
};

export const deletePlaylist = (playlistId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        const deletedPlaylist = await res.json();
        dispatch(deletePlaylistAction(playlistId));
        return deletedPlaylist;
    }
};

export const showPlaylist = (playlistId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`);

    if (res.ok) {
        const playlist = await res.json();
        dispatch(showPlaylistAction(playlist));
        return playlist;
    }
};

const initPlaylistData = {};

const playlistReducer = (state = initPlaylistData, action) => {
    let newState;
    switch (action.type) {
        case GET_PLAYLISTS:
            newState = {...state}
            action.payload.forEach(playlist => {
                newState[playlist.id] = playlist
            })
            return newState;
        case CREATE_PLAYLIST:
            newState = {...state};
            newState[action.playlist.id] = action.playlist;
            return newState;
        case UPDATE_PLAYLIST:
            newState = {...state};
            newState[action.playlist.id] = action.playlist;
            return newState;
        case DELETE_PLAYLIST:
            newState = {...state};
            delete newState[action.playlistId];
            return newState;
        case SHOW_PLAYLIST:
            newState = {...state};
            newState[action.playlist.id] = action.playlist;
            return newState;
        default:
            return state;
    }
}

export default playlistReducer;
