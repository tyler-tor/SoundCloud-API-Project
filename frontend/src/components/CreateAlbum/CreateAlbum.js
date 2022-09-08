import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAlbum } from "../../store/albums";
import './createalbum.css';


const CreateAlbum = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        const data = {
            title,
            description,
            imageUrl,
        }
        return dispatch(createAlbum(data))
            .then(() => setShowModal(false), history.push('/albums'))
            .catch(
                async (response) => {
                    if (response && response.errors) setErrors(response.errors);
                });

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="create-album-form">
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
            <label>
                Image Url
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
            </label>
            <button
                type="submit"
                className="create-album-btn">
                Add Album
            </button>
        </form>
    )
};

export default CreateAlbum;
