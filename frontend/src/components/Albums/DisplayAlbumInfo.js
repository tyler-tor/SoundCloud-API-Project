import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from "../../store/albums";
import './displayalbum.css';

const DisplayAlbumInfo = () => {
    const { albumId } = useParams();
    const album = useSelector(state => state.albums[albumId]);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch]);

    return (
        <>
            {album && (
                <div
                className="album-detail-list">
                    <div
                    className="album-detail-container">
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
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
};

export default DisplayAlbumInfo;
