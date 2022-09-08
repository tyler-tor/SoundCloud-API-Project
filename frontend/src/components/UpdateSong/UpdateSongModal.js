import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateSong from './UpdateSong';

const UpdateSongModal = ({song, userId}) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (song.userId === userId) {
            setShowModal(true)
        } else {
            window.alert('You do not have access to update this song')
        }
    };

    return (
        <>
            <button onClick={handleClick}
            className="song-btns">Update Song</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateSong song={song}
                    setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
};

export default UpdateSongModal;
