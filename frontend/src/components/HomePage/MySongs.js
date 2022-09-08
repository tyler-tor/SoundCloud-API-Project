import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { mySongs } from '../../store/songs';
import DeleteSong from '../Songs/DeleteSong';

const MySongs = () => {
    // const songs = Object(useSelector(state => state.songs));
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(mySongs())
    // }, [dispatch])

    // return (
    //     <div
    //         className='my-songs-box'>
    //         {songs && (songs.map(song => {
    //             return (
    //                 <div
    //                 key={song.id}
    //                 className='song-container'>
    //                     <div
    //                         key={song.id}>
    //                         {song.title}
    //                     </div>
    //                     <DeleteSong
    //                     value={song.id}
    //                     songId={song.id}
    //                     key={song.id} />
    //                 </div>
    //             )
    //         }))}
    //     </div>
    // )
};

export default MySongs;
