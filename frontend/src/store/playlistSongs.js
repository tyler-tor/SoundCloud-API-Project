import { csrfFetch } from "./csrf";

const GET_PLAYLIST_SONGS = 'playlistSongs/GET_PLAYLIST_SONGS';
const ADD_SONG_TO_PLAYLIST = 'playlistSongs/ADD_SONG';
const REMOVE_SONG_FROM_PLAYLIST = 'playlistSongs/REMOVE_SONG';

const getPlaylistSongsAction = (playlistSongs) => ({
    type: GET_PLAYLIST_SONGS,
    payload: playlistSongs
});

const addPlaylistSongAction = (data) => ({
    type: ADD_SONG_TO_PLAYLIST,
    payload: data
})

export const addSongToPlaylist = (data) => async (dispatch) => {
    const {playlistId} = data
    const res = await csrfFetch(`/api/playlists/${playlistId}/songs`, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if(res.ok) {

    }
};
