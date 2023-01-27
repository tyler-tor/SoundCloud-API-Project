import { bindActionCreators } from "redux";
import { csrfFetch } from "./csrf";

const GET_ARTISTS = 'users/GET_ARTISTS';

const getArtistsAction = (artists) => ({
    type: GET_ARTISTS,
    payload: artists
});

export const getArtists = () => async (dispatch) => {
    const res = await csrfFetch('/api/artists');

    if (res.ok) {
        const data = await res.json();
        dispatch(getArtistsAction(data));
        return data;
    }
}

const initArtistData = {
    currArtist: null,
    artists: []
};

const artistsReducer = (state = initArtistData, action) => {
    let newState;
    switch (action.type) {
        case GET_ARTISTS:
            newState = {}
            action.payload.forEach(artist => {
                newState[artist.id] = artist;
            })
            return newState;
        default:
            return state;
    }
}

export default artistsReducer;
