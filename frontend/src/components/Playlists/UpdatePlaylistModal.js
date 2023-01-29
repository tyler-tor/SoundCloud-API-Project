import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdatePlaylist from './UpdatePlaylist';
import './Playlists.css'

function UpdatePlaylistModal({ playlist, userId }) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (playlist.userId === userId) {
            setShowModal(true);
        } else {
            window.alert('You are not the owner of this playlist');
        }
    };

    return (
        <>
            <button onClick={handleClick} className='playlist-btns'>Update Playlist</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdatePlaylist playlist={playlist} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default UpdatePlaylistModal
