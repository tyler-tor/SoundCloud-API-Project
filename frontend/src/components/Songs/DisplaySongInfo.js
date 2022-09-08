import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSongs } from '../../store/songs';
import './displaysong.css'

const DisplaySongInfo = () => {
    const { songId } = useParams();
    const song = useSelector(state => state.songs[songId]);
    const dispatch = useDispatch();
    // console.log(songId)

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    return (
        <>
            {song &&
                (<div
                    className='song-detail-list'>
                    <div
                    className='song-detail-container'>
                        <h2
                        className='sd-header'>Song Information:</h2>
                        <ul>
                            <li>
                                {song.title}
                            </li>
                            <li>
                                {song.description}
                            </li>
                        </ul>
                    </div>
                </div>
                )}
        </>
    )
}

export default DisplaySongInfo;
