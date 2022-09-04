// import { csrfFetch } from "./csrf";

// const GET_MY_PLAYLISTS = 'playlists/GET_MY_PLAYLISTS';

// const getMyPlaylists = (playlists) => ({
//     type: GET_MY_PLAYLISTS,
//     payload: playlists
// });

// export const myPlaylists = () => async (dispatch) => {
//     const res = await csrfFetch('/api/my/playlists');

//     if(res.ok){
//         const data = await res.json();
//         dispatch(getMyPlaylists(data.Playlists));
//         return data;
//     };
// };
