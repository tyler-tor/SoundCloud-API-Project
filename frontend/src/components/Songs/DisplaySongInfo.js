import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSong, getSongs } from '../../store/songs';

const DisplaySongInfo = () => {
    const { songId } = useParams();
    const song = useSelector(state => state.songs[songId]);
    const dispatch = useDispatch();
    console.log(songId)

    useEffect(() => {
        dispatch(showSong(songId));
    }, [dispatch]);

    return (
        <>
            {song &&
                (<div
                    className='song-detail-list'>
                    <div>
                        <h2>Song Information</h2>
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
