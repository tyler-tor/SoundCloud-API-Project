import { csrfFetch } from "./csrf";

const GET_ALBUMS = 'albums/GET_ALBUMS';
const CREATE_ALBUM = 'albums/CREATE_ALBUM';
const UPDATE_ALBUM = 'albums/UPDATE_ALBUMS';
const REMOVE_ALBUM = 'albums/REMOVE_ALBUM';
const SHOW_ALBUM = 'albums/SHOW_ALBUM';

const getAlbumsAction = (albums) => ({
    type: GET_ALBUMS,
    payload: albums
});

const createAlbumAction = (album) => ({
    type: CREATE_ALBUM,
    album
});

const updateAlbumAction = (album) => ({
    type: UPDATE_ALBUM,
    album
});

const removeAlbumAction = (albumId) => ({
    type: REMOVE_ALBUM,
    albumId
});

const showAlbumAction = (album) => ({
    type: SHOW_ALBUM,
    album
})

export const getAlbums = () => async (dispatch) => {
    const res = await csrfFetch('/api/albums');

    if (res.ok) {
        const albums = await res.json();
        dispatch(getAlbumsAction(albums));
        return albums;
    }
};

export const createAlbum = (data) => async (dispatch) => {
    const res = await csrfFetch('/api/albums', {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const newAlbum = await res.json();
        dispatch(createAlbumAction(newAlbum));
        return newAlbum;
    };
};

export const updateAlbum = (data) => async (dispatch) => {
    const { albumId } = data;
    const res = await csrfFetch(`/api/albums/${albumId}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const updatedAlbum = await res.json();
        dispatch(updateAlbumAction(updatedAlbum));
        return updatedAlbum;
    }
};
export const removeAlbum = (albumId) => async (dispatch) => {
    const res = await csrfFetch(`/api/albums/${albumId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        const deletedAlbum = await res.json();
        dispatch(removeAlbumAction(albumId));
        return deletedAlbum
    };
};

export const showAlbum = (albumId) => async(dispatch) => {
    const res = await csrfFetch(`/api/albums/${albumId}`);

    if(res.ok){
        const album = await res.json();
        dispatch(showAlbumAction(album));
        return album
    }
}

const initAlbumData = {
    currentAlbum: {},
    albums: {}
};

const albumsReducer = (state = initAlbumData, action) => {
    let newState;
    switch (action.type) {
        case (GET_ALBUMS):
            newState = {
                currentAlbum: {},
                albums: {}
            };
            action.payload.forEach((album) => {
                newState.albums[album.id] = album;
            });
            return newState;
        case (CREATE_ALBUM):
            newState = {...state};
            newState.albums[action.album.id] = action.album;
            return newState;
        case (UPDATE_ALBUM):
            newState = {...state};
            newState.currentAlbum = {...action.album}
            newState.albums[action.album.id] = action.album;
            return newState;
        case (REMOVE_ALBUM):
            newState = {...state};
            delete newState.albums[action.albumId];
            return newState;
        case (SHOW_ALBUM):
            newState = {...state};
            newState.currentAlbum[action.album.id] = action.album;
            return newState;
        default:
            return state;
    }
};

export default albumsReducer;
