import React, { useState } from 'react';
import { csrfFetch } from '../../store/csrf';
import './ImageComponent.css';

function ImageComponent({ setUrl }) {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(false);
    const [prevImageUrl, setPrevImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        setImageLoading(true);
        formData.append('image', image);
        const response = await csrfFetch('/api/images/upload', {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            setImageLoading(false);
            setUrl(data.profileImageUrl);
            setUploadedImage(true);
            setPrevImageUrl(data.profileImageUrl);
        }else {
            setImageLoading(false);
        }
    };

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <div className='upload-image-wrapper'>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={updateImage} />
                <button type="submit">Upload</button>
            {imageLoading && <p>Uploading...</p>}
            </form>
            {uploadedImage && <img src={prevImageUrl} className='prev-image' />}
        </div>
    )
}

export default ImageComponent
