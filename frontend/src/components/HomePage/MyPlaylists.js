import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { myPlaylists } from '../../store/session';

const MyPlaylists = () => {
    const playlists = useSelector(state => state.session.playlists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myPlaylists());
    }, [dispatch]);
    
    return (
        <div
        className='my-playlists-box'>
            {playlists && (playlists.map(playlist => {
                return (
                    <div
                    key={playlist.id}>
                        {playlist.name}
                    </div>
                )
            }))}
        </div>
    )
}


export default MyPlaylists;
