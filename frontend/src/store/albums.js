import { csrfFetch } from "./csrf";

const GET_ALBUMS = 'albums/GET_ALBUMS';
const GET_MY_ALBUMS = 'albums/GET_MY_ALBUMS';
const CREATE_ALBUM = 'albums/CREATE_ALBUM';
const UPDATE_ALBUM = 'albums/UPDATE_ALBUMS';
const REMOVE_ALBUM = 'albums/REMOVE_ALBUM';

const getAlbumsAction = (albums) => ({
    type: GET_ALBUMS,
    payload: albums
});

const getMyAlbums = (albums) => ({
    type: GET_MY_ALBUMS,
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
})

export const getAlbums = () => async (dispatch) => {
    const res = await csrfFetch('/api/albums');

    if (res.ok) {
        const albums = await res.json();
        dispatch(getAlbumsAction(albums));
        return albums;
    }
};

export const myAlbums = () => async (dispatch) => {
    const res = await csrfFetch('/api/my/albums');

    if (res.ok) {
        const data = await res.json();
        dispatch(getMyAlbums(data.Albums));
        return data;
    };
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

const initAlbumData = {
    allAlbums: [],
    myAlbums: []
};

const albumsReducer = (state = initAlbumData, action) => {
    let newState = {...state};
    switch (action.type) {
        case (GET_MY_ALBUMS):
            // newState = Object.assign({}, state);
            newState.myAlbums = {...action.payload};
            return newState;
        case (GET_ALBUMS):
            // newState = Object.assign({}, state);
            newState.allAlbums = {...action.payload};
            return newState
        case (CREATE_ALBUM):
            // newState = Object.assign({}, state);
            newState.myAlbums[action.album.id] = {...action.album};
            return newState;
        case (UPDATE_ALBUM):
            // newState = Object.assign({}, state);
            newState.myAlbums[action.album.id] = {...action.album};
            return newState;
        case (REMOVE_ALBUM):
            // newState = Object.assign({}, state);
            delete newState[action.albumId];
            return newState;
        default:
            return state;
    }
};

export default albumsReducer;
