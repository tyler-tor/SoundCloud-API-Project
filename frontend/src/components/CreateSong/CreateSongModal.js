import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSong from './CreateSong';

const CreateSongModal = ({albumId}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>+</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateSong albumId={albumId} />
                </Modal>
            )}
        </>
    )
};

export default CreateSongModal;
