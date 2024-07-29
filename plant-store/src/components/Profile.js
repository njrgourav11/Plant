import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch data from user.json
    fetch('/data/user.json')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="profile-header">
          <img src={userData.profilePic} alt="Profile" className="profile-pic" />
          <h1>{userData.name}</h1>
        </div>
        <div className="profile-info">
          <div className="profile-field">
            <span className="profile-label">Name:</span>
            <span className="profile-value box">{userData.name}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Email:</span>
            <span className="profile-value box">{userData.email}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Password:</span>
            <span className="profile-value box">{userData.password}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Phone:</span>
            <span className="profile-value box">{userData.phone}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Address:</span>
            <span className="profile-value box">{userData.address}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">State:</span>
            <span className="profile-value box">{userData.state}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Zipcode:</span>
            <span className="profile-value box">{userData.zipcode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
