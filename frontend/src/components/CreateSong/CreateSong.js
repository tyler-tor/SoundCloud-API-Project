import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAddSong } from "../../store/songs";
import { getAlbums } from "../../store/albums";
import './createsong.css';

const CreateSong = ({ albumId, setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState([]);
    // const [albumName, setAlbumName] = useState('')
    // const [albumIdState, setAlbumIdState] = useState(albumId)

    const user = useSelector(state => state.session.user);
    // const albumState = Object.values(useSelector(state => state.albums))

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        // let albumInput;

        if(!albumId){
            errors.push('there is no albumId connected, make sure to input the specified album');
            // albumInput = albumState.filter(album => {
            //     return album.title === albumName;
            // })
            // setAlbumIdState(albumInput.id)
        }


        const data = {
            title,
            description,
            url,
            imageUrl,
            albumId
            // user.id === albumInput.userId ? albumIdState : window.alert('This album is not yours!')
        }
        await dispatch(createAddSong(data))
            .then(() => setShowModal(false), history.push('/songs'))
            .catch(
                async (response) => {
                    if (response && response.errors) setErrors(response.errors);
                });
    };

    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch])

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
            {/* {!albumId &&
            (<label>
                Album Name
                <input
                    type='text'
                    value={albumName}
                    onChange={(e) => setAlbumName(e.target.value)}
                    required
                />
            </label>)} */}
            <button
                type="submit"
                className="create-song-btn">
                Add Song
            </button>
        </form>
    )
};

export default CreateSong;
