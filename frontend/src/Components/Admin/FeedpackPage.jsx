import React, { useState, useEffect } from 'react';
import "./FeedbackPage.css"
function FeedbackPage() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/Feedback/getall");
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setFeedbacks(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='body'>
            <h1>Feedback Messages</h1>
            <table className="rwd-table feedback-table">
                <tbody>
                    {feedbacks.map(feedback => (
                        <tr key={feedback._id} className="feedback-row">
                            <td>&ensp; From: {feedback.name}</td>
                            <td>&ensp; Email: {feedback.email}</td>
                            <td>&ensp; Date: {feedback.createdAt}</td>
                            <td>{feedback.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FeedbackPage;
