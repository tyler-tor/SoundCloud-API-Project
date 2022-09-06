import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getAlbums } from "../../store/albums";
import CreateSongModal from "../CreateSong/CreateSongModal";
import DeleteAlbum from "./DeleteAlbum";
import UpdateAlbumModal from "../UpdateAlbum/UpdateAlbumModal";

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
        <div>
            {albums && (albums.map(album => {
                return (
                    <div
                        className="album-container"
                        key={album.id}>
                        <div
                            key={album.id}>
                            {album.title}
                        </div>
                        {user && (
                            <div
                            className="album-btn-container">
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
