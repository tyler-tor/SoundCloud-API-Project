import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import AddSong from './AddSong';
import './Playlists.css'

function AddSongModal({songId}) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e => {
    e.preventDefault();
    setShowModal(true);
  })
  return (
    <div>
      <button onClick={handleClick} className='add-song-playlist-btn'>+ to Playlist</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddSong songId={songId} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  )
}

export default AddSongModal
