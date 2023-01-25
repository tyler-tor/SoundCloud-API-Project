import React from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Player.css';

function Player() {
  const song = useSelector((state) => state.player.song);

  return (
    <div className='media-player'>
      <AudioPlayer
        src={song?.url}
        header={song?.title}
        onPlay={e => console.log(e)} onPause={e => console.log(e)}
        volume={0.5}
      />
    </div>
  )
}

export default Player
