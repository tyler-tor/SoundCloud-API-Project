import { useSelector, useDispatch } from "react-redux";
import CreateAlbumModal from "../CreateAlbum/CreateAlbumModal";
import CreatePlaylistModal from "../CreatePlaylist/CreatePlaylistModal";
// import { getArtists } from "../../store/artists";
import { useEffect } from "react";
import { mySongs } from "../../store/session";
import './homepage.css'


const HomePage = () => {
    const currentUser = useSelector(state => state.session.user);
    const albums = useSelector(state => state.session.albums);
    const songs = useSelector(state => state.session.songs);
    const playlists = useSelector(state => state.session.playlists);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            dispatch(mySongs());
        }
    }, [currentUser]);

    return (currentUser ? (
        <div className="homepage-wrapper">
            <div className="homepage">
                <div className="user-profile-infobox-actions">
                    <div className="user-propic-wrapper">
                        <img className="user-profile-pic" src={currentUser.previewImage} alt="user pic" />
                    </div>
                    <div className="user-info-wrapper">
                        <ul className="user-info-list">
                            <li className="user-info-item">
                                {currentUser.username}
                            </li>
                            <li className="user-info-item">
                                {currentUser.email}
                            </li>
                            {currentUser.firstName && currentUser.lastName && (
                                <>
                                    <li className="user-info-item">
                                        {currentUser.firstName}
                                    </li>
                                    <li className="user-info-item">
                                        {currentUser.lastName}
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="create-buttons-wrapper">
                        <CreateAlbumModal />
                        <CreatePlaylistModal />
                    </div>
                </div>
                <div className="user-tiles-wrapper">
                    <div className="user-tile-title">
                        <h1>
                            Playlists:
                        </h1>
                    </div>
                    <div className="section-tiles">
                        {playlists.map((playlist, ind) => (
                            <div className="tile-wrapper" key={ind}>
                                <img className="tile-image" src={playlist.previewImage} alt="playlist cover" />
                                <strong className="tile-title">
                                    {playlist.name.length < 10 ? playlist.name : `${playlist.name.slice(0, 7)}...`}
                                </strong>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className="user-tiles-wrapper">
                    <div className="user-tile-title">
                        <h1>
                            Albums:
                        </h1>
                    </div>
                    <div className="section-tiles">
                        {albums.map((album, ind) => (
                            <div className="tile-wrapper" key={ind}>
                                <img className="tile-image" src={album.previewImage} alt="album cover" />
                                <strong className="tile-title">
                                    {album.title.length < 10 ? album.title : `${album.title.slice(0, 7)}...`}
                                </strong>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="user-songs-tiles-wrapper">
                    <div className="user-tile-title">
                        <h1>
                            Songs:
                        </h1>
                    </div>
                    <div className="section-tiles">
                        {songs.map((song, ind) => (
                            <div className="tile-wrapper"
                                key={ind}>
                                    <img className="tile-image" src={song.previewImage} alt="song cover" />
                                <strong className="tile-title">
                                    {song.title.length < 10 ? song.title : `${song.title.slice(0, 7)}...`}
                                </strong>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    ) :
        (
            <div className="welcome-page-wrapper">
                <div className="welcome-page">
                    <div className="welcome-text">
                        <h2
                            className="welcome-title">
                            Get Started Today
                        </h2>
                        <p>Log in or signup for a free account </p>
                        <p>to get the music started</p>
                    </div>
                </div>
            </div>
        ))
}


export default HomePage
