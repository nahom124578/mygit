import React from "react";
import "./ImagingResult.css";
import { Link } from "react-router-dom"; // Import Link component

const ImagingResult = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div className="imaging-result-page">
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
        <h1>Upload Imaging Result</h1>
        <form id="imagingResultForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="resultFile">Select Image File:</label>
            <input type="file" id="resultFile" name="resultFile" />
          </div>
          <div>
            <label htmlFor="details">Details:</label>
            <textarea
              id="details"
              name="details"
              rows="5"
              cols="50"
              placeholder="Enter Imaging Result Details Here......"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer>
        &copy; <span id="currentYear"></span> Radiologist Page
      </footer>
    </div>
  );
};

export default ImagingResult;
