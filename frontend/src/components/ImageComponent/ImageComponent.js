import React, { useState } from 'react';
import './ImageComponent.css';

function ImageComponent({ setUrl }) {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(false);
    const [prevImageUrl, setPrevImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setImageLoading(true);
        const formData = new FormData();
        formData.append('image', image);
        const response = await fetch('/api/images/upload', {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            setImageLoading(false);
            setImage(data.url);
            setUploadedImage(true);
            setPrevImageUrl(data.url);
        }else {
            setImageLoading(false);
        }
    };

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={updateImage} />
                <button type="submit">Upload</button>
            </form>
            {imageLoading && <p>Uploading...</p>}
            {uploadedImage && <img src={prevImageUrl} />}
        </div>
    )
}

export default ImageComponent
