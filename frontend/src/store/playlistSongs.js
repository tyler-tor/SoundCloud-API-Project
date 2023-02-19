import { csrfFetch } from "./csrf";

const ADD_SONG_TO_PLAYLIST = 'playlistSongs/ADD_SONG';
const REMOVE_SONG_FROM_PLAYLIST = 'playlistSongs/REMOVE_SONG';

const addPlaylistSongAction = (data) => ({
    type: ADD_SONG_TO_PLAYLIST,
    payload: data
})

const deletePlaylistSongAction = (data) => ({
    type: REMOVE_SONG_FROM_PLAYLIST,
    payload: data
})

export const addSongToPlaylist = (data) => async (dispatch) => {
    const {playlistId} = data
    const res = await csrfFetch(`/api/playlists/${playlistId}/songs`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if(res.ok) {
        const addedSongs = await res.json();
        await dispatch(addPlaylistSongAction(addedSongs));
        return addedSongs;
    }
};

export const removeSongFromPlaylist = (data) => async (dispatch) => {
    const {playlistId, songId} = data;
    const res = await csrfFetch(`/api/playlists/${playlistId}/songs/${songId}`, {
        method: 'DELETE',
    });

    if(res.ok) {
        const deletedSongFromPlaylist = await res.json();
        dispatch(deletePlaylistSongAction(data));
        return deletedSongFromPlaylist;
    }
}
