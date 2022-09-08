import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateAlbum from './UpdateAlbum';

const UpdateAlbumModal = ({album, userId}) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (album.userId === userId) {
            setShowModal(true)
        } else {
            window.alert('You do not have access to update this album')
        }
    };

    return (
        <>
            <button onClick={handleClick}
            className="album-btns">Update Album</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateAlbum album={album}
                    setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
};

export default UpdateAlbumModal;
