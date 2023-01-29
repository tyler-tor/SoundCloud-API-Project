import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPlaylist } from '../../store/playlists';
import ImageComponent from '../ImageComponent';
import './CreatePlaylist.css';

function CreatePlaylist({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const data = {
      name,
      imageUrl: url
    };

    return dispatch(createPlaylist(data))
      .then(() => {
        setShowModal(false)
        history.push('/playlists');
      }).catch(async (response) => {
        if (response && response.errors) setErrors(response.errors);
      })
  }
  return (
    <div className='create-playlist-container'>
      <div className="npf-item">
        <ImageComponent setUrl={setUrl} />
      </div>
      <form
        onSubmit={handleSubmit}
        className='create-playlist-form'>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Name
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        </label>
        <button type='submit'
        className='create-playlist-btn'>Create Playlist</button>
      </form>
    </div>
  )
}

export default CreatePlaylist
