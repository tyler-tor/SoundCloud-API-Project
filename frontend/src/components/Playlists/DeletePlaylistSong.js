import React from 'react';
import { useDispatch} from 'react-redux';
import { removeSongFromPlaylist } from '../../store/playlistSongs';
import { showPlaylist } from '../../store/playlists';
import './Playlists.css';

function DeletePlaylistSong({ songId, playlistId, setShowModal }) {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            songId,
            playlistId
        }

        await dispatch(removeSongFromPlaylist(data)).then(() => dispatch(showPlaylist(playlistId))).then(() => setShowModal(false))
    }

    return (
        <div className='confirm-delete-form'>
            <h2>Are you sure you want to remove this song?</h2>
            <button
                type="submit"
                className="remove-song-btn"
                onClick={handleSubmit}>
                Remove
            </button>
        </div>
    )
}

export default DeletePlaylistSong
