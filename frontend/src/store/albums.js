import { csrfFetch } from "./csrf";

const GET_ALBUMS = 'albums/GET_ALBUMS';

const getAlbumsAction = (albums) => ({
    type: GET_ALBUMS,
    payload: albums
})

export const getAlbums = () => async (dispatch) => {
    const res = await csrfFetch('/api/albums');

    if(res.ok){
        const albums = await res.json();
        dispatch(getAlbumsAction(albums));
        return albums;
    }
};

const initAlbumData = {
    Albums: []
 };

const albumsReducer = (state = initAlbumData, action) => {
    let newState;
    switch (action.type) {
        case (GET_ALBUMS):
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState
        default:
            return state;
    }
};

export default albumsReducer;
