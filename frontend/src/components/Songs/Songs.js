import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { getSongs } from "../../store/songs";
import DeleteSong from "./DeleteSong";
import UpdateSongModal from "../UpdateSong/UpdateSongModal";
import './songs.css'

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
        <div className='entire-songs-container'>
            {songs && (songs.map(song => {
                return (
                    <div
                        className="song-container"
                        key={song.id}>
                        <NavLink to={`/songs/${song.id}`}
                        className='song-titles'>
                            {song.title}
                        </NavLink>
                        {user &&
                            (
                                <div>
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
