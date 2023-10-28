import React, { useState } from 'react';
import "./Profile.css"

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('Username'); 
  const [userEmail, setUserEmail] = useState('example@gmail.com');
  const [userPhone, setUserPhone] = useState('+7 (777) 77 7777');
  const [sername, setSername] = useState('Sername');
  const [tempName, setTempName] = useState(userName); 
  const [tempEmail, setTempEmail] = useState(userEmail); 
  const [tempPhone, setTempPhone] = useState(userPhone); 
  const [tempSername, setTempSername] = useState(sername);
  const [isEditing, setIsEditing] = useState(false);
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    if (isEditing) {
      setTempName(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    if (isEditing) {
      setTempEmail(e.target.value);
    }
  };

  const handlePhoneChange = (e) => {
    if (isEditing) {
      setTempPhone(e.target.value);
    }
  };

  const handleSernameChange = (e) => {
    if (isEditing) {
      setTempSername(e.target.value);
    }
  };

  const handleEditClick = () => {
    if (isEditing) {
     
      setUserName(tempName);
      setUserEmail(tempEmail);
      setUserPhone(tempPhone);
      setSername(tempSername);
    } else {
      
      setTempName(userName);
      setTempEmail(userEmail);
      setTempPhone(userPhone);
      setSername(sername);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <div className="user-profile">
        <div className="profile-image-container">
          <img
            src={profileImage || '/images/defaultProfile.jpg'} 
            alt="Profile"
            className="profile-image"
          />
        </div>

      <div className="profileEdit">
        

        <div className="user-details">
          <div className="user-name">
            <label htmlFor="userName">Username:< br /></label>
            {isEditing ? (
              <input
                type="text"
                id="userName"
                placeholder={tempName}
                onChange={handleNameChange}
                className='userName'
              />
            ) : (
              <span>{userName}</span>
            )}
          </div>
          <div className="user-sername">
            <label htmlFor="sername">Sername:< br /></label>
            {isEditing ? (
              <input
                type="text"
                id="sername"
                placeholder={sername}
                onChange={handleSernameChange}
                className='userName'
              />
            ) : (
              <span>{sername}</span>
            )}
          </div>
          <div className="user-email">
            <label htmlFor="userEmail">Email: <br /></label>
            {isEditing ? (
              <input
                type="email"
                id="userEmail"
                placeholder={tempEmail}
                onChange={handleEmailChange}
              />
            ) : (
              <span>{userEmail}</span>
            )}
          </div>
          <div className="user-phone">
            <label htmlFor="userPhone">Phone: <br /></label>
            {isEditing ? (
              <input
                type="tel"
                id="userPhone"
                placeholder={tempPhone}
                onChange={handlePhoneChange}
              />
            ) : (
              <span>{userPhone}</span>
            )}
          </div>

          
        </div>
        {isEditing ? (
          <input type="file" accept="image/*" onChange={handleImageChange} />
        ) : null}
      </div>
    </div>

    <button onClick={handleEditClick} className="editButton">
        {isEditing ? 'Сохранить' : 'Редактировать'}
    </button>

    

    </div>
  );
}

export default Profile;
