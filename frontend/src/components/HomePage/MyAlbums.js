
import { useSelector } from 'react-redux';

const MyAlbums = () => {
    const albums = Object.values(useSelector(state => state.session.albums.Albums));

    if(!albums){
        return null;
    }
    return (
        <div
            className='my-playlists-box'>
            {albums && (albums.map(album => {
                return (
                    <div
                        key={album.id}>
                        {album.title}
                    </div>
                )
            }))
            }
        </div>
    )
};

export default MyAlbums;
