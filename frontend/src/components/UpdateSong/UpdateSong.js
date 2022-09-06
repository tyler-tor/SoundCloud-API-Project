import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateSong } from "../../store/songs";

const UpdateSong = ({ song, setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState(song.title);
    const [description, setDescription] = useState(song.description);
    const [url, setUrl] = useState(song.url);
    const [imageUrl, setImageUrl] = useState(song.previewImage);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const data = {
            ...song,
            songId: song.id,
            title,
            description,
            url,
            imageUrl
        }
        await dispatch(updateSong(data))
            .then(() => setShowModal(false), history.push('/songs'))
            .catch(
                async (response) => {
                    if (response && response.errors) setErrors(response.errors);
                });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="update-song-form">
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
                className="update-song-btn">
                Update Song
            </button>
        </form>
    )
}


export default UpdateSong;
