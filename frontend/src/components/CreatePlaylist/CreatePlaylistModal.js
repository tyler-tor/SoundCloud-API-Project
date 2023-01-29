import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreatePlaylist from './CreatePlaylist';
import './CreatePlaylist.css'

function CreatePlaylistModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className='create-playlist-btn'>Create Playlist</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreatePlaylist setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default CreatePlaylistModal
