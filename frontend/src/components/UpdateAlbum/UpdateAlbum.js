import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateAlbum } from "../../store/albums";
import './updatealbum.css';

const UpdateAlbum = ({ album, setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState(album.title);
    const [description, setDescription] = useState(album.description);
    const [url, setUrl] = useState(album.previewImage);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const data = {
            ...album,
            albumId: album.id,
            title,
            description,
            imageUrl: url
        }
        await dispatch(updateAlbum(data))
            .then(() => setShowModal(false), history.push('/albums'))
            .catch(
                async (response) => {
                    if (response && response.errors) setErrors(response.errors);
                });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="update-album-form">
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
                Title
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                Description
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            {/* <label>
                Image Url
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
            </label> */}
            <button
                type="submit"
                className="update-album-btn">
                Update Album
            </button>
        </form>
    )
}

export default UpdateAlbum;
