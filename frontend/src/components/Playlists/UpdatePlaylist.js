import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updatePlaylist } from '../../store/playlists';

function UpdatePlaylist({ playlist, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(playlist.name);
  const [url, setUrl] = useState(playlist.previewImage);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const data = {
      ...playlist,
      playlist: playlist.id,
      name,
      imageUrl: url,
    }

  }
  return (
    <div>

    </div>
  )
}

export default UpdatePlaylist
