import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlaylist } from '../../store/playlists';
import { useHistory } from 'react-router-dom';
import { getSongs } from '../../store/songs';

function DeletePlaylist({ playlist, userId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const playlistState = useSelector((state) => state.playlists[playlist.id]);

    const handleClick = async (e) => {
        // e.preventDefault();
        if(playlist.userId === userId){
            dispatch(deletePlaylist(playlistState.id))
            .then(dispatch(getSongs()))
            .then(history.push('/playlists'))
            window.alert('Successfully deleted! Now create another!');
        }else {
            window.alert('You are not authorized to delete this playlist!');
        }
    }
    return (
        <button
        onClick={handleClick}
        className='playlist-btns'>
            Delete Playlist
        </button>
    )
}

export default DeletePlaylist
