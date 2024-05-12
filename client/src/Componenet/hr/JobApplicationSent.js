import React, { useState } from "react";
import axios from "axios";

const JobApplicationPage = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cv, setCV] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCVChange = (e) => {
    const file = e.target.files[0];
    setCV(file);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("cv", cv);

    try {
      const response = await axios.post(
        "http://localhost:8000/submitJobApplication",
        formData
      );
      console.log("Response:", response.data);
      alert("Job application submitted successfully");
      setEmail("");
      setPhoneNumber("");
      setCV(null);
    } catch (error) {
      alert("Error submitting job application");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto font-sans bg-gray-300">
      <div className="mb-4 mx-auto">
        <div className="mb-4 mx-auto ">
          {/* <h1 className="mb-4 mx-auto ">Job Application Form</h1> */}
          <label htmlFor="email" className="block text-gray-700">
            Please enter your Email here
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className=" border-gray-300 rounded px-2 py-2"
            placeholder="Enter your email"
          />
        </div>
        <label htmlFor="phoneNumber" className="block text-gray-700">
          your Active Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="Enter your phone number"
        />
        <div className="mb-4 mx-auto">
          <label htmlFor="cv" className="block text-gray-700">
            Upload CV:
          </label>
          <input
            type="file"
            id="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleCVChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};
export default JobApplicationPage;
