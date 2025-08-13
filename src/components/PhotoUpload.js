import React, { useState } from 'react';

const PhotoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append('photo', selectedFile);

        try {
            const response = await fetch('/api/upload-photo', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert("Photo uploaded successfully!");
                setSelectedFile(null);
            } else {
                alert("Failed to upload photo.");
            }
        } catch (error) {
            console.error("Error uploading photo:", error);
            alert("An error occurred while uploading the photo.");
        }
    };

    return (
        <div>
            <h2>Upload School Function Photo</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default PhotoUpload;