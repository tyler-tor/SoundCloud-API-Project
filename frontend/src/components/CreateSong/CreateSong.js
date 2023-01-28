import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAddSong } from "../../store/songs";
import './createsong.css';

const CreateSong = ({ albumId, setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    // const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [audioUrl, setAudioUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [albumIdState, setAlbumIdState] = useState(albumId ? albumId : '');

    const user = useSelector(state => state.session.user);
    const albumState = useSelector(state => state.albums[albumIdState])
    const albums = useSelector(state => state.session.albums);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        if (!albums || !albumState) {
            setErrors(["You need to select an album. If you don't have a album, create one"])
        } else {
            const data = {
                title,
                description,
                url: audioUrl,
                albumId: albumIdState
            }
            await dispatch(createAddSong(data))
                .then(() => setShowModal(false), history.push('/songs'))
                .catch(
                    async (response) => {
                        if (response && response.errors) setErrors(response.errors);
                    });

            setTitle("");
            setAudioUrl("");
            setDescription("");
            setErrors([]);
        }
    };

    const updateSongFile = (e) => {
        const SongFile = e.target.files[0];
        setAudioUrl(SongFile);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="create-song-form">
            <ul className="error-list">
                {errors.map((error, idx) => (
                    <li key={idx}
                        className='el-item'>{error}</li>
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
                Song
                <input
                    type="file"
                    name="song"
                    className="song-input"
                    value={audioUrl}
                    onChange={(e) => updateSongFile(e)}
                    required
                />
            </label>
            {!albumId &&
                (<label>
                    Album
                    <select
                        name="album"
                        value={albumIdState}
                        onChange={(e) => setAlbumIdState(e.target.value)}
                        className='select-input'>
                        <option value=''>Select an album</option>
                        {Object.values(albums).map((album, idx) => (
                            <option key={idx}
                                value={album.id}
                            >{album.title}</option>
                        ))}
                    </select>
                </label>)}
            <button
                type="submit"
                className="create-song-btn">
                Add Song
            </button>
        </form>
    )
};

export default CreateSong;
