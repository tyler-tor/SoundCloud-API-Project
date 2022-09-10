import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from "../../store/albums";
import { getSongs } from "../../store/songs";
import './displayalbum.css';

const DisplayAlbumInfo = () => {
    const { albumId } = useParams();
    const album = useSelector(state => state.albums[albumId]);
    const songs = Object.values(useSelector(state => state.songs));
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAlbums());
        dispatch(getSongs());
    }, [dispatch]);

    return (
        <>
            {album && (
                <div
                className="album-detail-list">
                    <div
                    className="album-detail-container"
                    style={{
                        backgroundImage: `url(${album.previewImage})`,
                        backgroundSize: 'cover',
                        opacity: '.9'
                    }}>
                        <h2
                        className="ad-header">Album Information:</h2>
                        <ul>
                            <li
                            className="ad-title">
                                {album.title}
                            </li>
                            <li
                            className="ad-description">
                                {album.description}
                            </li>
                            <li
                            className="ad-description">
                                belongs to user: {album.userId}
                            </li>
                            <ul>
                                Songs:
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
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
};

export default DisplayAlbumInfo;
