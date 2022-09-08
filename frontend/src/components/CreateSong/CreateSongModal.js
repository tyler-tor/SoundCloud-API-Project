import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSong from './CreateSong';

const CreateSongModal = ({album, userId}) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if(album.userId === userId){
            setShowModal(true)
        }else {
            window.alert('You do not have access to add a song to this album')
        }
    }

    return (
        <>
            <button onClick={handleClick}
            className="album-btns">New Song +</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateSong albumId={album.id}
                    setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
};

export default CreateSongModal;
