import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
// import { useHistory } from 'react-router-dom';
import CreateSong from './CreateSong';

const CreateSongModal = ({album, userId}) => {
    const [showModal, setShowModal] = useState(false);
    // const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(album)
        if(album){
            if(album.userId === userId){
                setShowModal(true)
            }else {
                window.alert('You do not have access to add a song');
            }
        }
        setShowModal(true)
    }

    return (
        <>
            <button onClick={handleClick}
            className="create-song-btn">Create Song</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateSong albumId={album ? album.id : ''}
                    setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
};

export default CreateSongModal;
