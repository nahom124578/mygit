import React, { useState } from 'react';
import './PatientRegistration.css'; // Import CSS file for styling

const PatientRegistration = () => {
  const [patientInfo, setPatientInfo] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    occupation: '',
    region: '',
    zone: '',
    woreda: '',
    kebele: '',
    city: '',
    phone: '',
    email: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    },
    insuranceInfo: {
      tenaMedihn: '',
      tenaMedihnNumber: ''
    },
    medicalHistory: {
      allergies: '',
      surgeries: '',
      conditions: '',
      medications: '',
      familyHistory: ''
    },
    reasonForVisit: '',
    consent: false,
    authorization: false,
    languagePreference: '',
    communicationNeeds: ''
  });

  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({ ...patientInfo, [name]: value });
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({
      ...patientInfo,
      emergencyContact: {
        ...patientInfo.emergencyContact,
        [name]: value
      }
    });
  };

  const handleInsuranceInfoChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({
      ...patientInfo,
      insuranceInfo: {
        ...patientInfo.insuranceInfo,
        [name]: value
      }
    });
  };

  const handleMedicalHistoryChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({
      ...patientInfo,
      medicalHistory: {
        ...patientInfo.medicalHistory,
        [name]: value
      }
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPatientInfo({ ...patientInfo, [name]: checked });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(patientInfo);
    if (isValid) {
      setRegistrationMessage('Patient registered successfully!');
    } else {
      setRegistrationMessage('Please fill out all required fields.');
    }
  };

  const validateForm = (formData) => {
    return (
      formData.fullName &&
      formData.dateOfBirth &&
      formData.gender &&
      formData.maritalStatus &&
      formData.occupation &&
      formData.region &&
      formData.zone &&
      formData.woreda &&
      formData.kebele &&
      formData.city &&
      formData.phone &&
      formData.email &&
      formData.emergencyContact.name &&
      formData.emergencyContact.relationship &&
      formData.emergencyContact.phone &&
      formData.insuranceInfo.tenaMedihn &&
      formData.insuranceInfo.tenaMedihnNumber &&
      formData.medicalHistory.allergies &&
      formData.medicalHistory.surgeries &&
      formData.medicalHistory.conditions &&
      formData.medicalHistory.medications &&
      formData.medicalHistory.familyHistory &&
      formData.reasonForVisit &&
      formData.languagePreference &&
      formData.communicationNeeds &&
      formData.consent &&
      formData.authorization
    );
  };

  return (
    <div className="registration-container">
      <h2 className="registration-heading">Patient Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Personal Information:</legend>
          <div className="input-field">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={patientInfo.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              value={patientInfo.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={patientInfo.gender}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="maritalStatus">Marital Status:</label>
            <input
              type="text"
              id="maritalStatus"
              name="maritalStatus"
              value={patientInfo.maritalStatus}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="occupation">Occupation:</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={patientInfo.occupation}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="region">Region:</label>
            <input
              type="text"
              id="region"
              name="region"
              value={patientInfo.region}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="zone">Zone:</label>
            <input
              type="text"
              id="zone"
              name="zone"
              value={patientInfo.zone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="woreda">Woreda:</label>
            <input
              type="text"
              id="woreda"
              name="woreda"
              value={patientInfo.woreda}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="kebele">Kebele:</label>
            <input
              type="text"
              id="kebele"
              name="kebele"
              value={patientInfo.kebele}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={patientInfo.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={patientInfo.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={patientInfo.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
            <input
              type="text"
              id="emergencyContactName"
              name="emergencyContact.name"
              value={patientInfo.emergencyContact.name}
              onChange={handleEmergencyContactChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="emergencyContactRelationship">Emergency Contact Relationship:</label>
            <input
              type="text"
              id="emergencyContactRelationship"
              name="emergencyContact.relationship"
              value={patientInfo.emergencyContact.relationship}
              onChange={handleEmergencyContactChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="emergencyContactPhone">Emergency Contact Phone:</label>
            <input
              type="text"
              id="emergencyContactPhone"
              name="emergencyContact.phone"
              value={patientInfo.emergencyContact.phone}
              onChange={handleEmergencyContactChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="insuranceInfoTenaMedihn">Insurance Info Tena Medihn:</label>
            <input
              type="text"
              id="insuranceInfoTenaMedihn"
              name="insuranceInfo.tenaMedihn"
              value={patientInfo.insuranceInfo.tenaMedihn}
              onChange={handleInsuranceInfoChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="insuranceInfoTenaMedihnNumber">Insurance Info Tena Medihn Number:</label>
            <input
              type="text"
              id="insuranceInfoTenaMedihnNumber"
              name="insuranceInfo.tenaMedihnNumber"
              value={patientInfo.insuranceInfo.tenaMedihnNumber}
              onChange={handleInsuranceInfoChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="medicalHistoryAllergies">Medical History Allergies:</label>
            <input
              type="text"
              id="medicalHistoryAllergies"
              name="medicalHistory.allergies"
              value={patientInfo.medicalHistory.allergies}
              onChange={handleMedicalHistoryChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="medicalHistorySurgeries">Medical History Surgeries:</label>
            <input
              type="text"
              id="medicalHistorySurgeries"
              name="medicalHistory.surgeries"
              value={patientInfo.medicalHistory.surgeries}
              onChange={handleMedicalHistoryChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="medicalHistoryConditions">Medical History Conditions:</label>
            <input
              type="text"
              id="medicalHistoryConditions"
              name="medicalHistory.conditions"
              value={patientInfo.medicalHistory.conditions}
              onChange={handleMedicalHistoryChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="medicalHistoryMedications">Medical History Medications:</label>
            <input
              type="text"
              id="medicalHistoryMedications"
              name="medicalHistory.medications"
              value={patientInfo.medicalHistory.medications}
              onChange={handleMedicalHistoryChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="medicalHistoryFamilyHistory">Medical History Family History:</label>
            <input
              type="text"
              id="medicalHistoryFamilyHistory"
              name="medicalHistory.familyHistory"
              value={patientInfo.medicalHistory.familyHistory}
              onChange={handleMedicalHistoryChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="reasonForVisit">Reason for Visit:</label>
            <input
              type="text"
              id="reasonForVisit"
              name="reasonForVisit"
              value={patientInfo.reasonForVisit}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="languagePreference">Language Preference:</label>
            <input
              type="text"
              id="languagePreference"
              name="languagePreference"
              value={patientInfo.languagePreference}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="communicationNeeds">Communication Needs:</label>
            <input
              type="text"
              id="communicationNeeds"
              name="communicationNeeds"
              value={patientInfo.communicationNeeds}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="consent">Consent:</label>
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={patientInfo.consent}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="authorization">Authorization:</label>
            <input
              type="checkbox"
              id="authorization"
              name="authorization"
              checked={patientInfo.authorization}
              onChange={handleCheckboxChange}
            />
          </div>
        </fieldset>

        <button type="submit">Register Patient</button>
      </form>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};

export default PatientRegistration;
