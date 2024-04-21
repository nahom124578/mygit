import React, { useState } from 'react';
import './Profile.css'; // Assuming you create Profile.css for styling

function Profile() {
  const [profileInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    Qualification:'',
    address: '',
    pharmacyName: '',
    pharmacyAddress: ''
  });

  const [profilePicture, setProfilePicture] = useState(null);

/* const handleProfileInfoChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };
 */ 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={profilePicture ? URL.createObjectURL(profilePicture) : 'Placeholder.png'} alt="Profile" />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={() => setProfilePicture(null)}>Change Photo</button>
      </div>
      <div className="profile-info">
        <h1>Personal information</h1>
        <ul>
          <li>
            <strong>Full Name:</strong> {profileInfo.fullName}
          </li>
          <li>
            <strong>Email:</strong> {profileInfo.email}
          </li>
          <li>
            <strong>Phone Number:</strong> {profileInfo.phoneNumber}
          </li>
          
          <li>
            <strong> Education Qualification:</strong> {profileInfo.Qualification}
          </li>

          <li>
            <strong>Address:</strong> {profileInfo.address}
          </li>
          <li>
            <strong>Pharmacy Name:</strong> {profileInfo.pharmacyName}
          </li>
          <li>
            <strong>Pharmacy Address:</strong> {profileInfo.pharmacyAddress}
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Profile;
