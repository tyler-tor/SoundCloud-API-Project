import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateAlbum from './CreateAlbum';

const CreateAlbumModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>New Album</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateAlbum setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
};

export default CreateAlbumModal;
