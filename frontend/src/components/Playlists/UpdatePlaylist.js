import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updatePlaylist } from '../../store/playlists';
import './Playlists.css'

function UpdatePlaylist({ playlist, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(playlist.name);
  const [url, setUrl] = useState(playlist.previewImage);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const data = {
      ...playlist,
      playlistId: playlist.id,
      name,
      imageUrl: url,
    };

    await dispatch(updatePlaylist(data))
      .then(() => {
        setShowModal(false)
        history.push('/playlists')
      }).catch(async (response) => {
        if (response && response.errors) setErrors(response.errors);
      })

  }
  return (
    <form
    onSubmit={handleSubmit}
    className='update-playlist-form'>
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
      <label>
        Name
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
      </label>
      <button type='submit'
      className='update-playlist-btn'>Update Playlist</button>
    </form>
  )
}

export default UpdatePlaylist
