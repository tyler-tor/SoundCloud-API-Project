import { csrfFetch } from "./csrf";

const SET_SESSION_USER = 'session/SET_SESSION_USER';
const REMOVE_SESSION_USER = 'session/REMOVE_SESSION_USER';
const SIGNUP_NEW_USER = 'session/SIGNUP_NEW_USER';

const setSessionUser = (user) => ({
    type: SET_SESSION_USER,
    payload: user
});

const removeSessionUser = () => ({
    type: REMOVE_SESSION_USER,
    payload: null
});

const signUpNewUser = (user) => ({
    type: SIGNUP_NEW_USER,
    payload: user
})

export const loginUser = (user) => async (dispatch) => {
    const res = await csrfFetch('/api/session/login', {
        method: 'POST',
        body: JSON.stringify(user)
    });

    if(res.ok){
        const user = await res.json();
        dispatch(setSessionUser(user));
        return user;
    }
    return res;
};

export const getCurrUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/my');

    if(res.ok){
        const {currUser} = await res.json();
        dispatch(setSessionUser(currUser));
        return res
    };
};

export const signUpUser = (user) => async (dispatch) => {
    const res = await csrfFetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify(user)
    });

    if(res.ok){
        const newUser = await res.json();
        dispatch(signUpNewUser(newUser));
        return newUser;
    };
};

const initUserData = { user: null };

const sessionReducer = (state = initUserData, action) => {
    let newState = { ...state };
    switch (action.type) {
        case (SIGNUP_NEW_USER):
            newState.user = {...action.payload};
            return newState;
        case (SET_SESSION_USER):
            newState.user = { ...action.payload };
            return newState;
        case (REMOVE_SESSION_USER):
            newState.user = { ...action.payload };
            return newState;
        default:
            return newState;
    }
};

export default sessionReducer;
