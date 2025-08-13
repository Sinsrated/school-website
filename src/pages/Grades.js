import React, { useEffect, useState } from 'react';
import { fetchGrades } from '../utils/api';

const Grades = () => {
    const [grades, setGrades] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getGrades = async () => {
            try {
                const data = await fetchGrades();
                setGrades(data);
            } catch (error) {
                console.error("Error fetching grades:", error);
            } finally {
                setLoading(false);
            }
        };

        getGrades();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Uploaded Grades</h1>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((grade, index) => (
                        <tr key={index}>
                            <td>{grade.studentName}</td>
                            <td>{grade.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Grades;