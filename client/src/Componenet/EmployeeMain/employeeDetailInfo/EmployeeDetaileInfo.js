import React, { useState } from "react";
import axios from "axios";

export default function EmployeeDetaileInfo({ product }) {
  const [firstName, setFirstName] = useState(`${product.firstName}`);
  const [lastName, setLastName] = useState(`${product.lastName}`);
  const [contract, setContract] = useState(`${product.lastName}`);
  const [phoneNumber, setPhoneNumber] = useState(`${product.phoneNumber}`);
  const [emergencyContact, setEmergencyContact] = useState(
    `${product.emergencyContact}`
  );
  const [salary, setSalary] = useState(`${product.salary}`);
  const [department, setDepartment] = useState(`${product.department}`);
  const [email, setEmail] = useState(`${product.email}`);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [gender, setGender] = useState(product.gender === "Male");
  const [birthday, setBirthday] = useState(`${product.birthday}`);
  const [address, setAddress] = useState(`${product.address}`);
  const [bonus, setBonus] = useState(`${product.bonus}`);
  const [tax, setTax] = useState(`${product.address}`);
  const [showAdditionalAttributes, setShowAdditionalAttributes] =
    useState(false);
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleTax = (event) => {
    setTax(event.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleContractChange = (e) => {
    setContract(e.target.value);
    setShowAdditionalAttributes(true);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmergencyContactChange = (e) => {
    setEmergencyContact(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  console.log(product);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      tax: tax,
      salary: salary,
      emergencyContact: emergencyContact,
      department: department,
      gender: gender,
      birthday: birthday,
      address: address,
      tax: tax,
    };

    // Send a PUT request to update the data
    axios
      .put(`http://localhost:8000/updateEmploye/${product._id}`, updatedData)
      .then((response) => {
        // console.log("Data updated successfully:", response.data);
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });

    let isValid = true;
    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^[0-9]+$/;
    if (!firstName.match(nameRegex)) {
      alert("Please enter a valid first name");
      isValid = false;
    }
    if (!lastName.match(nameRegex)) {
      alert("Please enter a valid last name");
      isValid = false;
    }
    if (!department.match(nameRegex)) {
      alert("Please enter a valid department name");
      isValid = false;
    }
    if (!phoneNumber.match(phoneRegex)) {
      alert("Please enter a valid phone number");
      isValid = false;
    }
    if (!emergencyContact.match(phoneRegex)) {
      alert("Please enter a valid emergency contact number");
      isValid = false;
    }
    if (isValid) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="w-full max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white color-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                className="form-input mt-1 block outline-none w-full bg-slate-300"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                className="form-input mt-1 block outline-none w-full bg-slate-300"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">Role</label>
              <select
                value={contract}
                onChange={handleContractChange}
                className="form-select mt-1 block w-full outline-none bg-slate-300"
              >
                <option value=""></option>
                <option value="Doctors">Doctors</option>

                <option value="Radiologist">Radiologist</option>
                <option value="LabTechnician">Lab Technician</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Receptionist">Receptionist</option>
                <option value="ContentCreator">Content Creator</option>
              </select>
            </div>

            {showAdditionalAttributes && contract === "Doctors" && (
              <div className="w-full px-3 mb-6">
                <label className="block text-gray-700">Specialization</label>
                <input
                  type="text"
                  className="form-input mt-1 block outline-none w-full bg-slate-300"
                  placeholder="Enter specialization"
                />
              </div>
            )}
            {showAdditionalAttributes && contract === "Radiologist" && (
              <div className="w-full px-3 mb-6">
                <label className="block text-gray-700">Specialization</label>
                <input
                  type="text"
                  className="form-input mt-1 block outline-none w-full bg-slate-300"
                  placeholder="Enter specialization"
                />
              </div>
            )}
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">Phone Number:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={10}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">Emergency Contact:</label>
              <input
                type="number"
                value={emergencyContact}
                onChange={handleEmergencyContactChange}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">
                Total Salary in Birr:
              </label>

              <input
                type="number"
                value={salary}
                onChange={handleSalaryChange}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={8}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">TotalTax in %:</label>
              <input
                type="number"
                value={tax}
                onChange={handleTax}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={2}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">Department:</label>
              <input
                type="text"
                value={department}
                onChange={handleDepartmentChange}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={15}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="form-input mt-1 block w-full outline-none bg-slate-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">Gender :</label>
              <label>
                <input
                  type="checkbox"
                  value="male"
                  className="mx-2"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
                <input
                  type="checkbox"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mx-2"
                />{" "}
                Female
              </label>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">BirthDay:</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="form-input mt-1 block outline-none w-full bg-slate-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={20}
                required
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">
                Bonus/compensation in birr:
              </label>
              <input
                type="number"
                value={bonus}
                onChange={(e) => setBonus(e.target.value)}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={8}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Update Employee information
          </button>
        </form>
      </div>
      {formSubmitted ? (
        <div className="text-green-500 mx-48 ">
          Form submitted successfully wait for response ok man !
        </div>
      ) : null}
    </div>
  );
}
