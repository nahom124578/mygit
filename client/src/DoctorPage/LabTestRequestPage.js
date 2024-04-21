// LabTestRequestPage.js

import React from 'react';
import './LabTestRequestPage.css';

function LabTestRequestPage() {
  return (
    <div className="lab-test-request-page2">
      <h1>Lab Test Request</h1>
      <div className="form-container2">
        <form className="form-left2">
          <div className="form-group2">
            <label htmlFor="patientName">Patient Name</label>
            <input type="text" id="patientName" name="patientName" required />
          </div>
          <div className="form-group2">
            <label htmlFor="patientId">Patient ID</label>
            <input type="text" id="patientId" name="patientId" required />
          </div>
          <div className="form-group2">
            <label htmlFor="doctorName">Doctor Name</label>
            <input type="text" id="doctorName" name="doctorName" required />
          </div>
          <div className="form-group2">
            <label htmlFor="doctorId">Doctor ID</label>
            <input type="text" id="doctorId" name="doctorId" required />
          </div>
        </form>
        <form className="form-right2">
          <div className="form-group2">
            <label htmlFor="labTestType">Lab Test Type</label>
            <select id="labTestType" name="labTestType" required>
              <option value="">Select Lab Test Type</option>
              {/* Add options for lab test types */}
            </select>
          </div>
          <div className="form-group2">
            <label htmlFor="testDate">Test Date</label>
            <input type="date" id="testDate" name="testDate" required />
          </div>
          <div className="form-group2">
            <label htmlFor="urgency">Urgency</label>
            <select id="urgency" name="urgency" required>
              <option value="">Select Urgency</option>
              <option value="urgent">Urgent</option>
              <option value="normal">Normal</option>
            </select>
          </div>
          {/* Add more form fields for additional attributes */}
        </form>
      </div>
      <button type="submit" className="submit-button2">Submit</button>
    </div>
  );
}

export default LabTestRequestPage;
