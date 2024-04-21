import React, { useState } from 'react';

const AppointmentForm = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    patientName: '',
    phoneNumber: '',
    doctorName: '',
    appointmentDate: '',
    appointmentTime: ''
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate checking doctor availability
    const doctorAvailable = true; // Replace with actual logic

    const selectedDateTime = new Date(appointmentDetails.appointmentDate + 'T' + appointmentDetails.appointmentTime).getTime();
    const currentDateTime = new Date().getTime();

    if (!appointmentDetails.patientName || !appointmentDetails.phoneNumber || !appointmentDetails.doctorName || !appointmentDetails.appointmentDate || !appointmentDetails.appointmentTime) {
      setError('All fields are required.');
    } else if (selectedDateTime < currentDateTime) {
      setError('Appointment date and time should be in the future.');
    } else if (doctorAvailable) {
      setConfirmationMessage('Appointment scheduled successfully!');
      setError('');
    } else {
      setConfirmationMessage('');
      setError('Sorry, the doctor is not available at the selected time.');
    }
  };

  return (
    <div>
      <h2>Schedule Appointment</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={appointmentDetails.patientName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={appointmentDetails.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="doctorName">Doctor Name:</label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            value={appointmentDetails.doctorName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={appointmentDetails.appointmentDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="appointmentTime">Appointment Time:</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            value={appointmentDetails.appointmentTime}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Schedule Appointment</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {confirmationMessage && <p style={{ color: 'green' }}>{confirmationMessage}</p>}
      </form>
    </div>
  );
};

export default AppointmentForm;
