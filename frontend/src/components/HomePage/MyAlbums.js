import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CreateSongModal from '../CreateSong/CreateSongModal';
import { myAlbums } from '../../store/albums';

const MyAlbums = () => {
    const albums = Object.values(useSelector(state => state.albums.myAlbums));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myAlbums())
    }, [dispatch])

    return (
        <div
            className='my-albums-box'>
            {albums && (albums.map(album => {
                return (
                    <div
                    key={album.id}
                    className='album-container'>
                        <div
                            key={album.id}>
                            {album.title}
                        </div>
                        <CreateSongModal albumId={album.id} />
                    </div>
                )
            }))
            }
        </div>
    )
};

export default MyAlbums;
