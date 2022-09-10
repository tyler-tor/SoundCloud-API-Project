import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { getAlbums } from "../../store/albums";
import { getSongs } from "../../store/songs";
import CreateSongModal from "../CreateSong/CreateSongModal";
import DeleteAlbum from "./DeleteAlbum";
import UpdateAlbumModal from "../UpdateAlbum/UpdateAlbumModal";
import CreateAlbumModal from "../CreateAlbum/CreateAlbumModal";
import './albums.css';

const Albums = () => {
    const albums = Object.values(useSelector(state => state.albums));
    const songs = Object.values(useSelector(state => state.songs));
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums())
        .then(dispatch(getSongs()))
        
    }, [dispatch]);

    if (!albums) {
        return null;
    };

    const checkValidation = (album) => {
        if (user.id === album.userId) {
            return (
                <div>
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
            {user && <CreateAlbumModal />}
            { user && <div
            className='album-splash-text'>
                Now let's create/add songs to our Album's!
            </div>}
            <div className="entire-albums-container">
                {albums && (albums.map(album => {
                    return (
                        <div
                            className="album-container"
                            key={album.id}>
                            <NavLink to={`/albums/${album.id}`}
                                className='album-titles'>
                                {album.title}
                            </NavLink>
                            <ul>
                                {songs.map(song => {
                                    if (album.id === song.albumId) {
                                        return (
                                            <li
                                                key={song.id}>
                                                {song.title}
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
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
