import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { getAlbums } from "../../store/albums";
import CreateSongModal from "../CreateSong/CreateSongModal";
import DeleteAlbum from "./DeleteAlbum";
import UpdateAlbumModal from "../UpdateAlbum/UpdateAlbumModal";
import './albums.css';

const Albums = () => {
    const albums = Object.values(useSelector(state => state.albums));
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch]);

    if (!albums) {
        return null;
    };

    return (
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
                        {user && (
                            <div>
                                <CreateSongModal album={album}
                                    userId={user.id} />
                                <DeleteAlbum album={album}
                                    userId={user.id} />
                                <UpdateAlbumModal album={album}
                                    userId={user.id} />
                            </div>
                        )}
                    </div>
                )
            }
            ))}
        </div>
    )
}

export default Albums;
