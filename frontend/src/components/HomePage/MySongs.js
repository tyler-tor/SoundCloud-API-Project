import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { mySongs } from '../../store/songs';
import DeleteSong from '../Songs/DeleteSong';

const MySongs = () => {
    const songs = Object.values(useSelector(state => state.songs.mySongs));
    const dispatch = useDispatch();
    console.log(songs);

    useEffect(() => {
        dispatch(mySongs())
    }, [dispatch])

    return (
        <div
            className='my-songs-box'>
            {songs && (songs.map(song => {
                return (
                    <div
                    key={song.id}
                    className='song-container'>
                        <div
                            key={song.id}>
                            {song.title}
                        </div>
                        <DeleteSong songId={song.id} />
                    </div>
                )
            }))}
        </div>
    )
};

export default MySongs;
