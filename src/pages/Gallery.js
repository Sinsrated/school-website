import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('/api/photos');
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div className="gallery">
            <h1>School Function Gallery</h1>
            <div className="photo-grid">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-item">
                        <img src={photo.url} alt={photo.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;