import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createAlbum } from "../../store/albums";
import { myAlbums } from "../../store/albums";


const CreateAlbum = ({setShowModal}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const data = {
            title,
            description,
            imageUrl,
        }
        return dispatch(createAlbum(data))
            .then(() => setShowModal(false))
            .catch(
                async (response) => {
                    if (response && response.errors) setErrors(response.errors);
                });

    };
    useEffect(() => {
        dispatch(myAlbums());
    }, [dispatch]);

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
