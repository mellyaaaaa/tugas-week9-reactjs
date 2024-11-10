import React from 'react';
import { FaUser } from 'react-icons/fa';
import './UpdateProfile.css';

function UpdateProfile() {
  return (
    <div className="update-profile-container">
      <div className="header">
        <span className="back-icon">{"<"}</span>
        <h2>Edit Profile</h2>
      </div>
      <div className="profile-icon">
        <FaUser />
      </div>
      <form className="profile-form">
        <label>Profile URL</label>
        <input type="text" placeholder="<Image URL>" />
        <label>Name</label>
        <input type="text" placeholder="Your name" />
        <label>Email</label>
        <input type="email" placeholder="example@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="********" />
        <button className="submit-btn">
          <span>✓</span> Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
