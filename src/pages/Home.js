import React from 'react';
import { Link } from 'react-router-dom';
import './styles/main.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Bright Stars Nursery & Primary School</h1>
            <p>Your child's education is our priority. Explore our website to learn more about our school activities and achievements.</p>
            <nav>
                <ul>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/grades">Grades</Link></li>
                    <li><Link to="/upload-photos">Upload Photos</Link></li>
                    <li><Link to="/upload-grades">Upload Grades</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;