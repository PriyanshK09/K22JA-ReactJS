import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();

  return (
    <div className="container">
      <h1>User Profile</h1>
      <p>Welcome to the Profile Page</p>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default Profile;
