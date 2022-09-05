import { useDispatch } from "react-redux";
import { removeSong } from "../../store/songs";

const DeleteSong = ({songId}) => {
    const dispatch = useDispatch();
    console.log(songId)

    const handleClick = async (e) => {
        e.preventDefault();
        // console.log('e', songId)
        await dispatch(removeSong(songId));
    }
    return (
        <button
        onClick={handleClick}>
            Delete Song
        </button>
    )
}

export default DeleteSong;
