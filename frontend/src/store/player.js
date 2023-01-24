const PLAY_SONG = 'player/PLAY_SONG';

export const playSong = (song) => ({
    type: PLAY_SONG,
    payload: song
});

let newState = {
    song: null
};

const playerReducer = (state = newState, action) => {
    switch (action.type) {
        case PLAY_SONG:
            newState = {
                ...state,
                song: action.payload
            };
            return newState;
        default:
            return state;
    }
};

export default playerReducer;
