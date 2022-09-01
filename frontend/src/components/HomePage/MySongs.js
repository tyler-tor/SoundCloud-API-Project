import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mySongs } from '../../store/session';

const MySongs = () => {
    const songs = Object.values(useSelector(state => state.session.songs.Songs));

    return (
        <div
        className='my-playlists-box'>
            {songs && (songs.map(song => {
                return (
                    <div
                    key={song.id}>
                        {song.title}
                    </div>
                )
            }))}
        </div>
    )
};

export default MySongs;
