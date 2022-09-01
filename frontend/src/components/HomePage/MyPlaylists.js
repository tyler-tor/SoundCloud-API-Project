import { useSelector } from 'react-redux';

const MyPlaylists = () => {
    const playlists = useSelector(state => state.session.playlists);
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
