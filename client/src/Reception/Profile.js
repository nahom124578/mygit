import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      formData: props,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };
  

  handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            photoUrl: reader.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', this.state.formData);
    this.toggleEdit();
  };

  render() {
    const { isEditing, formData } = this.state;

    return (
      <div className="profile-container">
        <div className="profile">
          <div className="profile-photo">
            {formData.photoUrl ? (
              <img src={formData.photoUrl} alt="Profile" />
            ) : (
              <div className="empty-photo">No Photo</div>
              
              
            )}
          </div>
          
          {isEditing ? (
            <form onSubmit={this.handleSubmit} className="edit-form">
              <div className="form-group">
                <label>
                  Name:
                  <input type="text" name="name" value={formData.name} onChange={this.handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Age:
                  <input type="number" name="age" value={formData.age} onChange={this.handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Role:
                  <input type="text" name="role" value={formData.role} onChange={this.handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Department:
                  <input type="text" name="department" value={formData.department} onChange={this.handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Phone Number:
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={this.handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Email:
                  <input type="email" name="email" value={formData.email} onChange={this.handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Bio:
                  <textarea name="bio" value={formData.bio} onChange={this.handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Photo:
                  <input type="file" accept="image/*" onChange={this.handleFileChange} />
                </label>
              </div>
              <button type="submit">Save</button>
            </form>
          ) : (
            <div className="profile-details">
              <h2>{formData.name}</h2>
              <p>Age: {formData.age}</p>
              <p>Role: {formData.role}</p>
              <p>Department: {formData.department}</p>
              <p>Phone Number: {formData.phoneNumber}</p>
              <p>Email: {formData.email}</p>
              <p>Bio: {formData.bio}</p>
            </div>
          )}
          <div className="profile-actions">
            <button onClick={this.toggleEdit}>{isEditing ? 'Cancel' : 'Edit Profile'}</button>
            <button>Change Password</button>
          </div>
        </div>
      </div>
    );
    
  }
}

export default Profile;
