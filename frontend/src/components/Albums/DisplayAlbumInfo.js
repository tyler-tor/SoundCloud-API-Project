import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAlbum } from "../../store/albums";
import CreateSongModal from "../CreateSong/CreateSongModal";
import UpdateAlbumModal from "../UpdateAlbum/UpdateAlbumModal";
import DeleteAlbum from "./DeleteAlbum";
import './displayalbum.css';

const DisplayAlbumInfo = () => {
    const { albumId } = useParams();
    const album = useSelector(state => state.albums.currentAlbum[albumId]);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(showAlbum(parseInt(albumId)));
    }, []);

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
                                <img className='ind-ai-pro-pic' src={album.Artist.previewImage} alt={album.Artist.previewImage} />
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
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default DisplayAlbumInfo;
