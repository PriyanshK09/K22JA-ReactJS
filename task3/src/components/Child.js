import React, { useState, useEffect } from 'react';

const Stories = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            console.log(response);
            if (!response.ok) {
                throw new Error('Network Response was not ok');
            }
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Stories</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Stories;