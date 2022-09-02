import { useSelector } from 'react-redux';
// import CreateSong from '../CreateSong/CreateSong';

const MySongs = () => {
    const songs = useSelector(state => state.session.songs);

    return (
        <div
            className='my-songs-box'>
            {songs && (songs.map(song => {
                return (
                    <div
                    className='song-container'>
                        <div
                            key={song.id}>
                            {song.title}
                        </div>
                    </div>
                )
            }))}
        </div>
    )
};

export default MySongs;
