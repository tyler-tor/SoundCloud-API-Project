import { useSelector } from "react-redux";
import CreateAlbumModal from "../CreateAlbum/CreateAlbumModal";
import './homepage.css'


const HomePage = () => {
    const currentUser = useSelector(state => state.session.user);

    return (currentUser ? (
        <div className="homepage">
            <div className="homepage-container">
                <h2 className="homepage-text">
                    The World is your Oyster!
                </h2>
            </div>
                <CreateAlbumModal />
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
