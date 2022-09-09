import { csrfFetch } from "./csrf";

const SET_SESSION_USER = 'session/SET_SESSION_USER';
const REMOVE_SESSION_USER = 'session/REMOVE_SESSION_USER';
const SIGNUP_NEW_USER = 'session/SIGNUP_NEW_USER';
const GET_MY_PLAYLISTS = 'session/GET_MY_PLAYLISTS';

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
})

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
    const res = await csrfFetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify(user)
    });

    if (res.ok) {
        const newUser = await res.json();
        dispatch(signUpNewUser(newUser));
        return newUser;
    };
};

export const myPlaylists = () => async (dispatch) => {
    const res = await csrfFetch('/api/my/playlists');

    if(res.ok){
        const data = await res.json();
        dispatch(getMyPlaylists(data.Playlists));
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
    playlists: []
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
            return newState;
        case (GET_MY_PLAYLISTS) :
            newState = Object.assign({}, state);
            newState.playlists = action.payload;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
