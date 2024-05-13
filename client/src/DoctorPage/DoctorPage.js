import React from "react";
import { Link } from "react-router-dom";
import "./DoctorPage.css";
import Sidebar from "./Sidebar";

const DoctorPage = () => {
  return (
    <div>
      <Sidebar/>
      <div className="hospital-info">
        <h2> ፭ ኪሎ አጠቃላይ ሆስፒታል</h2>
        <p> we care and it shows</p>
        
      </div>

      <div className="doctor-section">
        <div className="action-column">
          <div><Link to="/App1">
            <button className="action-button">Patient Information</button>
          </Link></div>
          <div><Link to="/LabTestRequestPage">
            <button className="action-button">Laboratory Request</button>
          </Link></div>
          <div><Link to="/Medicalimagingrequest">
            <button className="action-button">Imaging Request</button>
          </Link></div>
          <div><Link to="/PrescriptionFormPage">
            <button className="action-button">Prescription</button>
          </Link></div>
         
        
          
          
          
        </div>
        <div className="action-column">
        <div><Link to="/laboratoryresult">
            <button className="action-button">Laboratory Result</button>
          </Link></div>
        <div><Link to="/imagingresult">
            <button className="action-button">Imaging Result</button>
          </Link></div>
        <div><Link to="/ReferralForm">
            <button className="action-button">Referral</button>
          </Link></div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
