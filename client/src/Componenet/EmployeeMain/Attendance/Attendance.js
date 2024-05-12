import React from "react";
import axios from "axios";

const EmployeeAttendance = ({ product }) => {
  const handleSubmit = async () => {
    let x = product.attendance.toString(); // Compute x inside handleSubmit
    try {
      if (x == "false") {
        const updatedDataatt = {
          attendance: true,
        };
        const updatedData = {
          employeeId: product._id,
          employeeName: product.firstName,
          date: new Date(),
          remainingLeaveDay: 30,
          onLeave: 20,
        };

        await axios.post("http://localhost:8000/attendace", updatedData);
        alert(`${product.firstName} attendance marked.`);

        await axios.put(
          `http://localhost:8000/updateEmploye/${product._id}`,
          updatedDataatt
        );
        console.log("Attendance updated successfully");
      } else {
        alert(`${product.firstName} has already attended.`);
      }
    } catch (error) {
      console.error(error);
      alert(`Error updating attendance for ${product.firstName}`);
    }
  };

  return (
    <div className="py-4">
      <h2 className="text-lg font-semibold mb-4">Employee Attendance</h2>
      <p>Employee name : {product.firstName}</p>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
      >
        Mark Attendance
      </button>
    </div>
  );
};
export default EmployeeAttendance;
