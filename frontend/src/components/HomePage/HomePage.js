import { useSelector, useDispatch } from "react-redux";
import CreateAlbumModal from "../CreateAlbum/CreateAlbumModal";
import CreatePlaylistModal from "../CreatePlaylist/CreatePlaylistModal";
import { useEffect } from "react";
import { mySongs, myAlbums } from "../../store/session";
import './homepage.css'


const HomePage = () => {
    const currentUser = useSelector(state => state.session.user);
    const albums = useSelector(state => state.session.albums);
    const songs = useSelector(state => state.session.songs);
    const playlists = useSelector(state => state.session.playlists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mySongs());
        dispatch(myAlbums());
    }, []);

    console.log(currentUser);
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

                    </div>
                </div>
                <div className="user-tiles-wrapper">
                    <div className="user-tile-title">
                        <h1>
                            Albums:
                        </h1>
                    </div>
                    <div className="section-tiles">

                    </div>
                </div>
                <div className="user-songs-tiles-wrapper">
                    <div className="user-tile-title">
                        <h1>
                            Songs:
                        </h1>
                    </div>
                    <div className="section-tiles">

                    </div>
                </div>
            </div>
            {/* <div className="homepage-container">
                <h2 className="homepage-title">
                    Welcome {currentUser.username}!
                </h2>
                <p className="homepage-text">Start by creating a new Album!</p>
            </div>
                <CreateAlbumModal /> */}
        </div >
    ) :
        (
            <div className="welcome-page">
                <h2
                    className="welcome-title">
                    Get Started Today!
                </h2>
                <p>Log in or signup for a free account to</p>
                <p>Create Albums and Songs.</p>
            </div>
        ))
}


export default HomePage
