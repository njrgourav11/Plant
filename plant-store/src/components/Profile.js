import React, { useState, useEffect } from 'react';
import './Profile.css';
import EyeIcon from '../assets/eye.svg'; // Import the eye icon
import EditIcon from '../assets/edit.svg';

function Profile() {
  const [userData, setUserData] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem('loggedInUserEmail');

      if (email) {
        try {
          const response = await fetch('/data/users.json');
          const users = await response.json();

          const matchedUser = users.find(user => user.email === email);

          if (matchedUser) {
            setUserData(matchedUser);
          } else {
            setError('User not found');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError('An error occurred');
        }
      } else {
        setError('No user logged in');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData) {
    return <p>Loading...</p>;
  }


  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEditClick = () => {
    // Handle the edit action, e.g., open a modal or navigate to an edit page
    console.log('Edit clicked');
  };


  return (
    <div>
      <h2 className="featured-heading">Profile</h2>
    <div className="profile-container">
      <div className="profile-box">
        <div className="profile-header">
          <img src={userData.profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="profile-info">
          <div className="profile-field">
          <button className="edit-icon" onClick={handleEditClick}>
                <img src={EditIcon} alt="Edit" />
                Edit
              </button>
            <span className="profile-label">Name:</span>
            
            <span className="profile-value">{userData.name}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Email:</span>
            <span className="profile-value">{userData.email}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Password:</span>
            <span className="profile-value">
              {showPassword ? userData.password : '********'}
            </span>
            <button
              type="button"
              className="eye-icon"
              onClick={togglePassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <img src={EyeIcon} alt="Toggle visibility" />
            </button>
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
    </div>
  );
}

export default Profile;
