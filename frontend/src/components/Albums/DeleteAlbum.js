import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeAlbum, getAlbums } from "../../store/albums";
import { useHistory } from "react-router-dom";
import { getSongs } from "../../store/songs";

const DeleteAlbum = ({album, userId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const albumState = useSelector(state => state.albums[album.id])
    // console.log('songs', useSelector(state => state.songs))

    const handleClick = (e) => {
        // e.preventDefault();
        if(album.userId === userId){
            dispatch(removeAlbum(albumState.id))
            .then(dispatch(getSongs()))
            .then(history.push('/albums'));
            window.alert('Successfully deleted! Now create another!');
        }else {
            window.alert('You do not have access to delete/modify this album')
        }
    };

    // useEffect(() => {
    //     dispatch(getAlbums())
    //     .then(dispatch(getSongs()))
    // }, [dispatch])

    return (
        <button
        onClick={handleClick}
        className="album-btns">
            Delete Album
        </button>
    )
}

export default DeleteAlbum;
