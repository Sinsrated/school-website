import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com/api'; // Replace with your actual API URL

export const uploadPhoto = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/upload-photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading photo:', error);
        throw error;
    }
};

export const uploadGrades = async (gradesData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/upload-grades`, gradesData);
        return response.data;
    } catch (error) {
        console.error('Error uploading grades:', error);
        throw error;
    }
};

export const fetchPhotos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/photos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
};

export const fetchGrades = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/grades`);
        return response.data;
    } catch (error) {
        console.error('Error fetching grades:', error);
        throw error;
    }
};