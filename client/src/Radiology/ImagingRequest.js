import React from "react";
import "./ImagingRequest.css";
import { Link } from "react-router-dom"; // Import Link component

const ImagingRequest = () => {
  return (
    <div className="imaging-request-page">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/imaging-request">Imaging Request</Link>
          </li>
          <li>
            <Link to="/imaging-result">Imaging result</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Imaging Requests</h1>
        <div className="imaging-requests">
          {/* Imaging request items will be dynamically added here */}
        </div>
      </div>
      <footer>
        &copy; <span id="currentYear"></span> Radiologist Page
      </footer>
    </div>
  );
};

export default ImagingRequest;
