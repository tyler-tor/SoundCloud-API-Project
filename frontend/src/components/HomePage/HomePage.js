import { useSelector, useDispatch } from "react-redux";
import CreateAlbumModal from "../CreateAlbum/CreateAlbumModal";
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


    return (currentUser ? (
        <div className="homepage-wrapper">
        <div className="homepage">
            <div className="user-profile-infobox-actions">
                <div className="user-propic-wrapper">
                    <img className="user-profile-pic" src={currentUser.previewImage} alt="user pic" />
                </div>
                <div className="user-info-wrapper">

                </div>
                <div className="create-buttons-wrapper">

                </div>
            </div>
            <div className="user-tiles-wrapper">
                <div className="user-tile-title">
                    Playlists:
                </div>
                <div className="section-tiles">

                </div>
            </div>
            <div className="user-tiles-wrapper">
                <div className="user-tile-title">
                    Albums:
                </div>
                <div className="section-tiles">

                </div>
            </div>
            <div className="user-songs-tiles-wrapper">
                <div className="user-tile-title">
                    Songs:
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
