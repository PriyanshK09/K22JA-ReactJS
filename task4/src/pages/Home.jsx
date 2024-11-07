import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const userId = 123; // Example User ID
  
  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <p>
        <Link to={`/profile/${userId}`}>
          Go to Profile with User ID {userId}
        </Link>
      </p>
    </div>
  );
}

export default Home;
