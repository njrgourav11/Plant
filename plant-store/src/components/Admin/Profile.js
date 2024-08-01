import React, { useState } from 'react';
import './Profile.css';
import EyeIcon from '../../assets/eye.svg'; // Import the eye icon
import EditIcon from '../../assets/edit.svg';

function Profile() {
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

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
            <img src="/pfp.png" alt="Profile" className="profile-pic" />
          </div>
          <div className="profile-info">
            <div className="profile-field">
              <button className="edit-icon" onClick={handleEditClick}>
                <img src={EditIcon} alt="Edit" />
                Edit
              </button>
              <span className="profile-label">Name:</span>
              <span className="profile-value"></span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Email:</span>
              <span className="profile-value"></span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Password:</span>
              <span className="profile-value"></span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Phone:</span>
              <span className="profile-value"></span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Address:</span>
              <span className="profile-value"></span>
            </div>
            <div className="profile-field">
              <span className="profile-label">State:</span>
              <span className="profile-value"></span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Zipcode:</span>
              <span className="profile-value"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
