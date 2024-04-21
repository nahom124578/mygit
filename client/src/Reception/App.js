import React, { useState } from 'react';
import './App.css'; // Import the CSS file
// import ToDoList from './ToDoList.js'; // Import the ToDoList component

// Import other components
import AppointmentForm from './AppointmentForm.js';
import PatientRegistration from './PatientRegistration.js';
import InquiryHandler from './InquiryHandler.js';
import PatientRecords from './PatientRecords.js';
import TelemedicineCoordinator from './TelemedicineCoordinator.js';
import Profile from './Profile.js'; // Import the Profile component
import './PatientRegistration.css'

// Define enum for selected components
const SelectedComponent = {
  AppointmentForm: 'AppointmentForm',
  PatientRegistration: 'PatientRegistration',
  InquiryHandler: 'InquiryHandler',
  PatientRecords: 'PatientRecords',
  TelemedicineCoordinator: 'TelemedicineCoordinator',
  Profile: 'Profile', // Include Profile in the enum
  // ToDoList: 'ToDoList', // Include ToDoList in the enum
};

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [tasks, setTasks] = useState([]); // State for tasks

  // Function to handle navigation change
  const handleNavigationChange = (component) => {
    setSelectedComponent(component);
  };

  // Function to handle clicking on the profile button
  const handleProfileButtonClick = () => {
    setSelectedComponent(SelectedComponent.Profile);
  };

  // Function to render selected component based on state
  const renderComponent = () => {
    switch (selectedComponent) {
      case SelectedComponent.AppointmentForm:
        return <AppointmentForm />;
      case SelectedComponent.PatientRegistration:
        return <PatientRegistration />;
      case SelectedComponent.InquiryHandler:
        return <InquiryHandler />;
      case SelectedComponent.PatientRecords:
        return <PatientRecords />;
      case SelectedComponent.TelemedicineCoordinator:
        return <TelemedicineCoordinator />;
      case SelectedComponent.Profile:
        return <Profile name="John Doe" age={30} bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />;
      // case SelectedComponent.ToDoList:
      //   return <ToDoList tasks={tasks} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Navigation bar */}
     <nav className="navbar">
         {/* Receptionist text */}
        {/* Buttons for different components */}
       
       <h1 class="h1">Receptionist</h1>
        <div className="navigation-buttons">
          <button className="nav-button" onClick={() => handleNavigationChange(SelectedComponent.AppointmentForm)}>Schedule Appointment</button>
          <button className="nav-button" onClick={() => handleNavigationChange(SelectedComponent.PatientRegistration)}>Patient Registration</button>
          <button className="nav-button" onClick={() => handleNavigationChange(SelectedComponent.InquiryHandler)}>Handling Inquiries</button>
          <button className="nav-button" onClick={() => handleNavigationChange(SelectedComponent.PatientRecords)}>Managing Patient Records</button>
          <button className="nav-button" onClick={() => handleNavigationChange(SelectedComponent.TelemedicineCoordinator)}>Telemedicine Coordinator</button>
          <button className="nav-button" onClick={() => handleNavigationChange(SelectedComponent.Profile)}>Profile</button> 
        </div>
        {/* Button for the profile */}
        {/* <button className="profile-button" onClick={handleProfileButtonClick}>Profile</button> */}
      </nav>

      {/* Main content */}
      <div className="container">
        {/* Render selected component */}
        <div className="component-container">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default App;
