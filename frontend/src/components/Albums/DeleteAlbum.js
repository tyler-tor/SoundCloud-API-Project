import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeAlbum } from "../../store/albums";
import { useHistory } from "react-router-dom";
import { getSongs } from "../../store/songs";

const DeleteAlbum = ({album, userId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    console.log('songs', useSelector(state => state.songs))

    const handleClick = (e) => {
        // e.preventDefault();
        if(album.userId === userId){
            dispatch(removeAlbum(album.id));
            dispatch(getSongs())
            history.push('/albums');
            window.alert('Successfully deleted! Now create another!');
        }else {
            window.alert('You do not have access to delete/modify this album')
        }
    };

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])

    return (
        <button
        onClick={handleClick}
        className="album-btns">
            Delete Album
        </button>
    )
}

export default DeleteAlbum;
