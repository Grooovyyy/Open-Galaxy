import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackPage() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        axios.get('/api/feedbacks')
            .then(response => {
                setFeedbacks(response.data);
            })
            .catch(error => {
                console.error('Error fetching feedbacks:', error);
            });
    }, []);

    return (
        <div>
            <h1>Feedback Messages</h1>
            <ul>
                {feedbacks.map(feedback => (
                    <li key={feedback._id}>
                        <p>{feedback.message}</p>
                        <p>From: {feedback.sender}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeedbackPage;
