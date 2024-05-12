import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";


const PatientAdmission = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("/patient")
    .then(result => {
      var patientList = result.data.map((patient, index) => {
        return {...patient, id: index}
      });
      setPatients(patientList)
    })
  }, [])

  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Manager Dashboard
        </h1>

        {patients.length === 0 ? (
          <p className="text-gray-600 text-lg">No patients found.</p>
        ) : (
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold">Patient Name</th>
                <th className="px-4 py-2 font-bold">Date of Birth</th>
                <th className="px-4 py-2 font-bold">Phone Number</th>
                <th className="px-4 py-2 font-bold">Email</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td className="px-4 py-2">{`${patient.firstName} ${patient.lastName}`}</td>
                  <td className="px-4 py-2">{patient.dob}</td>
                  <td className="px-4 py-2">{patient.phoneNumber}</td>
                  <td className="px-4 py-2">{patient.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PatientAdmission;