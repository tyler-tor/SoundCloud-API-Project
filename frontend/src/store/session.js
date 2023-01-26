import { csrfFetch } from "./csrf";

const SET_SESSION_USER = 'session/SET_SESSION_USER';
const REMOVE_SESSION_USER = 'session/REMOVE_SESSION_USER';
const SIGNUP_NEW_USER = 'session/SIGNUP_NEW_USER';
const GET_MY_PLAYLISTS = 'session/GET_MY_PLAYLISTS';
const GET_MY_ALBUMS = 'session/GET_MY_ALBUMS';
const GET_MY_SONGS = 'session/GET_MY_SONGS';

const setSessionUser = (user) => ({
    type: SET_SESSION_USER,
    payload: user
});

const removeSessionUser = () => ({
    type: REMOVE_SESSION_USER
});

const signUpNewUser = (user) => ({
    type: SIGNUP_NEW_USER,
    payload: user
});

const getMyPlaylists = (playlists) => ({
    type: GET_MY_PLAYLISTS,
    payload: playlists
});

const getMyAlbums = (albums) => ({
    type: GET_MY_ALBUMS,
    payload: albums
});

const getMySongs = (songs) => ({
    type: GET_MY_SONGS,
    payload: songs
});

export const loginUser = (user) => async (dispatch) => {
    const res = await csrfFetch('/api/session/login', {
        method: 'POST',
        body: JSON.stringify(user)
    });

    if (res.ok) {
        const user = await res.json();
        dispatch(setSessionUser(user));
        return user;
    }
    return res;
};

export const getCurrUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/my');

    if (res.ok) {
        const { currUser } = await res.json();
        dispatch(setSessionUser(currUser));
        return res
    };
};

export const signUpUser = (user) => async (dispatch) => {
    const { image, images, username, email, password, firstName, lastName } = user;
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);

    // for multiple files
    if (images && images.length !== 0) {
        for (var i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }
    }

    // for single file
    if (image) formData.append("image", image);
    const res = await csrfFetch('/api/users/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData
    });

    if (res.ok) {
        const newUser = await res.json();
        dispatch(signUpNewUser(newUser));
        return newUser;
    };
};


export const myPlaylists = () => async (dispatch) => {
    const res = await csrfFetch('/api/my/playlists');

    if (res.ok) {
        const data = await res.json();
        dispatch(getMyPlaylists(data.Playlists));
        return data;
    };
};

export const mySongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/my/songs');

    if (res.ok) {
        const data = await res.json();
        dispatch(getMySongs(data.Songs));
        return data;
    };
};

export const myAlbums = () => async (dispatch) => {
    const res = await csrfFetch('/api/my/albums');

    if (res.ok) {
        const data = await res.json();
        dispatch(getMyAlbums(data.Albums));
        return data;
    };
};


export const logoutUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/session/logout', {
        method: 'DELETE'
    });

    if (res.ok) {
        const loggedOut = await res.json();
        dispatch(removeSessionUser())
        return loggedOut;
    };
};

const initUserData = {
    user: null,
    playlists: [],
    songs: [],
    albums: []
};

const sessionReducer = (state = initUserData, action) => {
    let newState;
    switch (action.type) {
        case (SIGNUP_NEW_USER):
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case (SET_SESSION_USER):
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case (REMOVE_SESSION_USER):
            newState = Object.assign({}, state);
            newState.user = null;
            newState.playlists = [];
            newState.songs = [];
            newState.albums = [];
            return newState;
        case (GET_MY_PLAYLISTS):
            newState = Object.assign({}, state);
            newState.playlists = action.payload;
            return newState;
        case(GET_MY_ALBUMS):
            newState = Object.assign({}, state);
            newState.albums = action.payload;
            return newState;
        case(GET_MY_SONGS):
            newState = Object.assign({}, state);
            newState.songs = action.payload;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
