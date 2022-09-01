import { useSelector } from 'react-redux';

const MyAlbums = () => {
    const albums = useSelector(state => state.session.albums);

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
