import { useSelector} from "react-redux";
import CreateAlbumModal from "../CreateAlbum/CreateAlbumModal";


const HomePage = () => {
    const currentUser = useSelector(state => state.session.user);

    return (currentUser ? (
        <div
            className="homepage-contain">
            The World is your Oyster!
            <CreateAlbumModal />
        </div >
    ) :
(
    <div className="welcome-page">
        <h2>
            Get Started Today!
        </h2>
        <p>Log in or signup for a free account.</p>
        <p>Create Albums and Songs.</p>
    </div>
))
}


export default HomePage
