import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { addSongToPlaylist } from '../../store/playlistSongs';
import './Playlists.css'


function AddSong({songId, setShowModal}) {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [playlistId, setPlaylistId] = useState('');

  const myPlaylists = useSelector((state) => state.session.playlists);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      songId,
      playlistId: parseInt(playlistId)
    }
    await dispatch(addSongToPlaylist(data)).then(() => setShowModal(false))
  }

  return myPlaylists && (
    <form
    onSubmit={handleSubmit}
    className='add-song-playlist-form'>
      <label>
        Playlists
        <select
        name='playlist'
        value={playlistId}
        onChange={(e) => setPlaylistId(e.target.value)}
        className='select-input'>
          <option value=''>Select Playlist</option>
          {Object.values(myPlaylists).map((playlist, ind) => (
            <option key={ind}
            value={playlist.id}
            >{playlist.name}</option>
          ))}
        </select>
      </label>
      <button
      type='submit'
      className='add-song-playlist-btn'>
        Add to Playlist
      </button>
    </form>
  )
}

export default AddSong
