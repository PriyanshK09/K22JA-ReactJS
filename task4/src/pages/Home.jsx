import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');
  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <p>
        <Link to={`/profile?name=${name}`}>Go to Profile with Name {name}</Link>
      </p>
    </div>
  );
}

export default Home;
