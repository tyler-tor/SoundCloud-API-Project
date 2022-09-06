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
    <div>
        HomePage
    </div>
))
}


export default HomePage
