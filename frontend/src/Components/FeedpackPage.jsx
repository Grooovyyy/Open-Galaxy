import React, { useState, useEffect } from 'react';

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
        <div>
            <h1>Feedback Messages</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {feedbacks.map(feedback => (
                        <li key={feedback._id}>
                            <p>{feedback.message}</p>
                            <p>From: {feedback.sender}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FeedbackPage;
