import React from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'Player.css';

function Player() {
  return (
    <div>
        <AudioPlayer src="https://s3.amazonaws.com/freecodecamp/sim" onPlay={e => console.log(e)} onPause={e => console.log(e)} />

    </div>
  )
}

export default Player
