import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAlbum } from "../../store/albums";
import ImageComponent from "../ImageComponent";
import './createalbum.css';


const CreateAlbum = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const data = {
            title,
            description,
            imageUrl: url
        }
        return dispatch(createAlbum(data))
            .then(() => setShowModal(false),
            history.push('/albums'))
            .catch(
                async (response) => {
                    if (response && response.errors) setErrors(response.errors);
                });

    };

    return (
        <div className="create-album-container">
            <div className="naf-item">
                <ImageComponent setUrl={setUrl} />
            </div>
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
                <button
                    type="submit"
                    className="create-album-btn">
                    Add Album
                </button>
            </form>
        </div>
    )
};

export default CreateAlbum;
