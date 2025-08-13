import React, { useState } from 'react';
import { uploadGrades } from '../utils/api';

const GradeUpload = () => {
    const [grades, setGrades] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setGrades(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await uploadGrades(grades);
            if (response.success) {
                setMessage('Grades uploaded successfully!');
            } else {
                setMessage('Failed to upload grades. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred while uploading grades.');
        }
    };

    return (
        <div>
            <h2>Upload Student Grades</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={grades}
                    onChange={handleChange}
                    placeholder="Enter grades here..."
                    rows="10"
                    cols="30"
                />
                <br />
                <button type="submit">Upload Grades</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default GradeUpload;