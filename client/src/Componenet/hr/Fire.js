import React, { useState } from "react";

const Fire = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [terminationReason, setTerminationReason] = useState("");

  const handleSearch = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="selectedEmployee"
          className="block text-gray-700 font-bold mb-2"
        >
          Search and Select Employee to Terminate
        </label>
        <input
          type="text"
          id="selectedEmployee"
          value={selectedEmployee}
          onChange={handleSearch}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search by name..."
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="terminationReason"
          className="block text-gray-700 font-bold mb-2"
        >
          Reason for Termination
        </label>
        <input
          type="text"
          id="terminationReason"
          value={terminationReason}
          onChange={(e) => setTerminationReason(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
      >
        Terminate Employee
      </button>
    </form>
  );
};

export default Fire;
