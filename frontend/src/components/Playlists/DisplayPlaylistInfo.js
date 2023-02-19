import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPlaylist } from "../../store/playlists";
import UpdatePlaylistModal from "./UpdatePlaylistModal";
import DeletePlaylist from "./DeletePlaylist";
import { removeSongFromPlaylist } from "../../store/playlistSongs";
import DeletePlaylistSongModal from "./DeletePlaylistSongModal";
import './DisplayPlaylistInfo.css';

function DisplayPlaylistInfo() {
    const { playlistId } = useParams();
    const playlist = useSelector(state => state.playlists.currentPlaylist[playlistId]);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showPlaylist(playlistId));
    }, []);

    const checkValidation = (playlist) => {
        if (user.id === playlist.userId) {
            return (
                <div className="ind-song-actions">
                    <UpdatePlaylistModal playlist={playlist} userId={user.id} />
                    <DeletePlaylist playlist={playlist} userId={user.id} />
                </div>
            )
        }
    }

    return playlist && (
        <div className="wrapper-div">
            <div className="ind-playlist-wrapper">
                <div className="ind-pi-wrapper">
                    <div className="pi-pic-wrapper">
                        <img src={playlist.previewImage}
                        alt={playlist.name} className='pi-pic' />
                    </div>
                    <div className="pi-detail-btns">
                        <h1 className='ind-playlist-title'>
                            {playlist.name}
                        </h1>
                        <div className="ind-pi-list">
                            <div className="ind-pi-item">
                                <img className="ind-pi-pro-pic"
                                src={playlist.User.previewImage} alt={playlist.User.username} />
                            </div>
                            <strong className="ind-pi-item">
                                {playlist.User.username}
                            </strong>
                            <strong className="ind-pi-item">
                                {playlist.User.email}
                            </strong>
                        </div>
                        {checkValidation(playlist)}
                    </div>
                </div>
                <div className="ind-playlist-songs-wrapper">
                    {playlist.Songs.map(song => {
                        return (
                            <div className="ip-song-container" key={song.id}>
                                <div className="ip-song-info">
                                    <img src={song.previewImage}
                                    className='song-img' alt={playlist.name} />
                                    <strong className="song-titles">
                                        {song.title}
                                        <p className="song-description">
                                            - {song.description}
                                        </p>
                                    </strong>
                                </div>
                                <div className="ip-song-actions">
                                    {(playlist.userId === user.id) && (
                                        <DeletePlaylistSongModal songId={song.id} playlistId={playlist.id} />
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DisplayPlaylistInfo
