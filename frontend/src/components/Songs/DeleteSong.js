import { useDispatch } from "react-redux";
import { removeSong} from "../../store/songs";

const DeleteSong = ({song, userId}) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        if(song.userId === userId){
            // console.log('songId', song.id)
            dispatch(removeSong(song.id));
        }else {
            window.alert('You do not have access to delete/modify this song');
        }
    }

    // useEffect(() => {
    //     dispatch(getSongs());
    // }, [dispatch])
    return (
        <button
        onClick={handleClick}>
            Delete Song
        </button>
    )
}

export default DeleteSong;
