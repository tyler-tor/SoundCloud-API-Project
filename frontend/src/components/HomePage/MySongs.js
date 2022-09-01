import { useSelector } from 'react-redux';

const MySongs = () => {
    const songs = useSelector(state => state.session.songs);

    return (
        <div
        className='my-playlists-box'>
            {songs && (songs.map(song => {
                return (
                    <div
                    key={song.id}>
                        {song.title}
                    </div>
                )
            }))}
        </div>
    )
};

export default MySongs;
