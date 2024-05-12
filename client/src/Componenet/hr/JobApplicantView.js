// JobApplicationsList.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const JobApplicationsList = () => {
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    fetchJobApplications();
  }, []);

  const fetchJobApplications = async () => {
    try {
      const response = await axios.get("http://localhost:8000/jobApplications");
      setJobApplications(response.data);
    } catch (error) {
      console.error("Error fetching job applications:", error);
    }
  };

  return (
    <div className="bg-gray-300 mx-auto w-full">
      <h2>
        {" "}
        Here below where Job Applications which is sent by client is Seen
      </h2>
      {jobApplications.map((application) => (
        <div
          key={application._id}
          className="mb-4 px-3 border-b-4 border-y-cyan-400 border-t-4 "
        >
          <h3>Email: {application.email}</h3>
          <p>Phone Number: {application.phoneNumber}</p>
          <p>CV File Name: {application.cvFileName}</p>
          <a
            href={`http://localhost:8000/downloadCV/${application.cvFileName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      ))}
    </div>
  );
};
export default JobApplicationsList;
