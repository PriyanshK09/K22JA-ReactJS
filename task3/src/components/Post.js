import React, { useState } from "react";
import axios from "axios";

const Post = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handlePostRequest = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "foo",
            body: "bar",
            userId: 1
        })
            .then(response => {
                console.log(response);
                setResponseData(response.data);
            })
            .catch(error => {
                setError(error);
            });
    }

    return (
        <div>
            <br />
            <h1>POST Request using Axios</h1>
            <button onClick={handlePostRequest}>Make Post Request</button>
            {/* Formatted Data */}
            {responseData && <div>
                <h3>Response Data: </h3>
                <p><strong>Title:</strong> {responseData.title}</p>
                <p><strong>Body:</strong> {responseData.body}</p>
                <p><strong>UserId:</strong> {responseData.userId}</p>
                <p><strong>Id:</strong> {responseData.id}</p>
            </div>}
            {/* Error Message */}
            {error && <p>{error.message}</p>}
            <br />
        </div>
    );
}

export default Post;
