import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Playlists.css'


function AddSong({songId, setShowModal}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const myPlaylists = useSelector((state) => state.session.playlists);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch()
  }

  return (
    <div>

    </div>
  )
}

export default AddSong
