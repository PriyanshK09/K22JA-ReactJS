import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Get = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the posts!', error);
            });
    }, []);

    return (
        <div>
            <h1>GET Request using Axios</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Get;