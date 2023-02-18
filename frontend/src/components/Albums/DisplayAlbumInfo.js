import { useParams } from "react-router-dom";
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAlbum } from "../../store/albums";
import CreateSongModal from "../CreateSong/CreateSongModal";
import UpdateAlbumModal from "../UpdateAlbum/UpdateAlbumModal";
import DeleteAlbum from "./DeleteAlbum";
import AddSongModal from "../Playlists/AddSongModal";
import DeleteSong from "../Songs/DeleteSong";
import UpdateSongModal from "../UpdateSong/UpdateSongModal";
import { playSong } from "../../store/player";
import { HiPlay } from "react-icons/hi";
import './displayalbum.css';

const DisplayAlbumInfo = () => {
    const { albumId } = useParams();
    const album = useSelector(state => state.albums.currentAlbum[albumId]);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(showAlbum(parseInt(albumId)));
    }, []);

    const playSongBtn = useCallback(
        (song) => {
            dispatch(playSong(song));
        },
        [dispatch]
    );

    const checkValidation = (album) => {
        if (user.id === album.userId) {
            return (
                <div className="ind-song-actions">
                    <CreateSongModal album={album}
                        userId={user.id} />
                    <UpdateAlbumModal album={album}
                        userId={user.id} />
                    <DeleteAlbum album={album}
                        userId={user.id} />
                </div>
            )
        }
    }

    const checkSongValidation = (song) => {
        if (user.id === song.userId) {
            return (
                <div className='ind-song-btns'>
                    <AddSongModal
                        song={song}
                        userId={user.id}
                        />
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
    }

    return album && (
        <div className="wrapper-div">
            <div
                className="ind-album-wrapper">
                <div className="ind-ai-wrapper">
                    <div className="ai-pic-wrapper">
                        <img src={album.previewImage} alt={album.title} className='ai-pic' />
                    </div>
                    <div className="ai-detail-btns">
                        <h1 className="ind-album-title">{album.title}</h1>
                        <div className="ind-ai-list">
                            <div className="ind-ai-item">
                                <img className='ind-ai-pro-pic' src={album.Artist.previewImage} alt={album.Artist.username} />
                            </div>
                            <strong className="ind-ai-item">
                                {album.Artist.username}
                            </strong>
                            <strong className="ind-ai-item">
                            {album.Artist.email}
                            </strong>
                        </div>
                        {checkValidation(album)}
                    </div>
                </div>
                <div className="ind-album-songs-wrapper">
                    {album.Songs.map(song => {
                        return (
                            <div className="ia-song-container"
                            key={song.id}>
                                <div className="ia-song-info">
                                <img src={album.previewImage}
                                className='song-img'>
                                </img>
                                <strong className='song-titles'>
                                    {song.title}
                                <p
                                    className="song-description">
                                    -
                                    {song.description}
                                </p>
                                </strong>
                                </div>
                                <div className="ind-song-actions">
                                {user && checkSongValidation(song)}
                                <HiPlay className="play-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        playSongBtn(song);
                                    }}
                                />
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default DisplayAlbumInfo;
