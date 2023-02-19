import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePlaylistSong from './DeletePlaylistSong';
import './Playlists.css';

function DeletePlaylistSongModal({ songId, playlistId }) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    return (
        <div>
            <button onClick={handleClick}
            className='remove-song-playlist-btn'>
                Remove from Playlist
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeletePlaylistSong songId={songId} playlistId={playlistId} setShowModal={setShowModal} />
                </Modal>
            )}
        </div>
    )
}

export default DeletePlaylistSongModal
