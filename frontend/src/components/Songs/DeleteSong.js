import { useDispatch } from "react-redux";
import { removeSong} from "../../store/songs";

const DeleteSong = ({song, userId}) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        if(song.userId === userId){
            dispatch(removeSong(song.id));
            window.alert('Successfully deleted! Now create another!');
        }else {
            window.alert('You do not have access to delete/modify this song');
        }
    }

    return (
        <button
        onClick={handleClick}
        className="song-btns">
            Delete Song
        </button>
    )
}

export default DeleteSong;
