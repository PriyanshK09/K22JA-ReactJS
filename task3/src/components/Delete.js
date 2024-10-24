import React, { useState } from "react";
import axios from "axios";

const Delete = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleDeleteRequest = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
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
            <h1>DELETE Request using Axios</h1>
            <button onClick={handleDeleteRequest}>Make Delete Request</button>
            {/* Formatted Data */}
            {responseData && <div>
                <h3>Response Data: </h3>
                <p>{JSON.stringify(responseData)}</p>
            </div>}
            {/* Error Message */}
            {error && <p>{error.message}</p>}
            <br />
        </div>
    );
}

export default Delete;