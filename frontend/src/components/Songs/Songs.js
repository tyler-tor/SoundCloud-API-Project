import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { HiPlay } from "react-icons/hi";
import { useEffect, useCallback } from 'react';
import { getSongs } from "../../store/songs";
import { getAlbums } from "../../store/albums";
import { playSong } from "../../store/player";
import DeleteSong from "./DeleteSong";
import CreateSongModal from "../CreateSong/CreateSongModal";
import UpdateSongModal from "../UpdateSong/UpdateSongModal";
import AddSongModal from '../Playlists/AddSongModal';
import './songs.css'

const Songs = () => {
    const songs = Object.values(useSelector(state => state.songs)).reverse();
    const albums = useSelector(state => state.albums);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs());
        dispatch(getAlbums());
    }, [dispatch]);

    const playSongBtn = useCallback(
        (song) => {
            dispatch(playSong(song));
        },
        [dispatch]
    );

    const checkValidation = (song) => {
        // if (user.id === song.userId) {
            return (
                <div className='ind-song-btns'>
                    <AddSongModal
                        songId={song.id}
                    />
                    {(user.id === song.userId) && (
                        <>
                            <DeleteSong
                                song={song}
                                userId={user.id}
                            />
                            <UpdateSongModal
                                song={song}
                                userId={user.id} />
                        </>
                    )}
                </div>
            )
        // }
    }

    return songs && albums && (
        <div
            className="cs-div">
            <div className='entire-songs-container'>
                {user && <CreateSongModal />}
                {songs && (songs.map(song => {
                    return (
                        <div
                            className="song-container"
                            key={song.id}>
                            <div className="ind-song-info">
                                <img src={song.previewImage}
                                    className='song-img'>
                                </img>
                                <NavLink to={`/albums/${song.albumId}`} className='song-titles'>

                                    {song.title}
                                    <p
                                        className="song-description">
                                        -
                                        {song.description}
                                    </p>
                                </NavLink>
                            </div>
                            <div className="ind-song-actions">
                                {user && checkValidation(song)}
                                <HiPlay className="play-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        playSongBtn(song);
                                    }}
                                />
                            </div>
                        </div>
                    )
                }))}
            </div>
        </div>
    )
};

export default Songs;
