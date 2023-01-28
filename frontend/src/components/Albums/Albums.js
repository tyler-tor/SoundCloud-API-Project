import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { getAlbums } from "../../store/albums";
import CreateSongModal from "../CreateSong/CreateSongModal";
import DeleteAlbum from "./DeleteAlbum";
import UpdateAlbumModal from "../UpdateAlbum/UpdateAlbumModal";
import CreateAlbumModal from "../CreateAlbum/CreateAlbumModal";
import './albums.css';

const Albums = () => {
    const albums = Object.values(useSelector(state => state.albums)).reverse();
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums())
    }, [dispatch]);

    if (!albums) {
        return null;
    };

    const checkValidation = (album) => {
        if (user.id === album.userId) {
            return (
                <div className="ind-song-actions">
                    <CreateSongModal album={album}
                        userId={user.id} />
                    <DeleteAlbum album={album}
                        userId={user.id} />
                    <UpdateAlbumModal album={album}
                        userId={user.id} />
                </div>
            )
        }
    }

    return (
        <div
            className="ca-div">
            <div className="entire-albums-container">
                {user && <CreateAlbumModal />}
                {albums && (albums.map(album => {
                    return (
                        <div
                            className="album-container"
                            key={album.id}>
                            <div className="ind-album-info">
                                <img src={album.previewImage} alt={album.name}
                                    className='album-img' />
                                <NavLink to={`/albums/${album.id}`}
                                    className='album-titles'>
                                    {album.title}
                                    <p className="album-description">
                                        -
                                        {album.description}
                                    </p>
                                </NavLink>
                            </div>
                            {user && checkValidation(album)}
                        </div>
                    )
                }
                ))}
            </div>
        </div>
    )
}

export default Albums;
