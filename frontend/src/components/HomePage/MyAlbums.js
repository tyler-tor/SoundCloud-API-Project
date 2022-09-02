import { useSelector } from 'react-redux';
import CreateSongModal from '../CreateSong/CreateSong';

const MyAlbums = () => {
    const albums = useSelector(state => state.session.albums);

    return (
        <div
            className='my-albums-box'>
            {albums && (albums.map(album => {
                return (
                    <div
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
