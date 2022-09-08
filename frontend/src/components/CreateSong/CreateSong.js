import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAddSong } from "../../store/songs";
import './createsong.css';

const CreateSong = ({ albumId, setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const data = {
            title,
            description,
            url,
            imageUrl,
            albumId
        }
        await dispatch(createAddSong(data))
            .then(() => setShowModal(false), history.push('/songs'))
            .catch(
                async (response) => {
                    if (response && response.errors) setErrors(response.errors);
                });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="create-song-form">
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
                Url
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
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
                className="create-song-btn">
                Add Song
            </button>
        </form>
    )
};

export default CreateSong;
