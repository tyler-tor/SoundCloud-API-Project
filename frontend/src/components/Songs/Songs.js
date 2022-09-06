import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { getSongs } from "../../store/songs";
import DeleteSong from "./DeleteSong";
import UpdateSongModal from "../UpdateSong/UpdateSongModal";

const Songs = () => {
    const songs = Object.values(useSelector(state => state.songs));
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    if (!songs) {
        return null;
    }

    return (
        <div>
            {songs && (songs.map(song => {
                return (
                    <div
                        className="song-container"
                        key={song.id}>
                        <NavLink to={`/songs/${song.id}`}>
                            {song.title}
                        </NavLink>
                        {user &&
                            (
                                <div
                                    className="song-btns">
                                    <DeleteSong
                                        song={song}
                                        userId={user.id}
                                    />
                                    <UpdateSongModal
                                        song={song}
                                        userId={user.id} />
                                </div>
                            )
                        }
                    </div>
                )
            }))}
        </div>
    )
};

export default Songs;
