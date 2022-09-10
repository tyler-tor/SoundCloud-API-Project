import { useDispatch } from "react-redux";
import { removeAlbum } from "../../store/albums";

const DeleteAlbum = ({album, userId}) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        if(album.userId === userId){
            dispatch(removeAlbum(album.id));
            window.alert('Successfully deleted! Now create another!');
        }else {
            window.alert('You do not have access to delete/modify this album')
        }
    };

    return (
        <button
        onClick={handleClick}
        className="album-btns">
            Delete Album
        </button>
    )
}

export default DeleteAlbum;
