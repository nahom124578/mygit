import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [employees, setEmployees] = useState([]); // to store data from DB
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [editedBonus, setEditedBonus] = useState("");
  const [editedPunishment, setEditedPunishment] = useState("");

  // Fetch data from database on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employee");
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployees();
  }, []);

  const handleEdit = (employee) => {
    setEditedEmployee(employee);
    setEditedPunishment(employee.punishment);
    setEditedBonus(employee.bonus);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8000/update/${editedEmployee.userid}`, {
        punishment: editedPunishment,
        bonus: editedBonus,
      });
      alert("Employee updated successfully!");
      const response = await axios.get("http://localhost:8000/employee");
      setEmployees(response.data);
      setEditedEmployee(null);
    } catch (error) {
      console.log("Error updating employee:", error);
    }
  };

  const handleDelete = async (userid) => {
    const shouldTerminate = window.confirm(
      "Are you sure you want to terminate this employee?"
    );
    if (!shouldTerminate) {
      return;
    }
    try {
      setEmployees(employees.filter((x) => x.userid !== userid));
      await axios.delete(`http://localhost:8000/remove/${userid}`);
      alert("Employee terminated successfully!");
    } catch (error) {
      console.log("Error deleting employee:", error);
    }
  };

  return (
    <>
      <div className="mt-10 px-6 mx-auto font-semibold">
        Here below is All our Employes In this Hospital{" "}
      </div>
      {/* <div className=" mx-auto px-4 py-2 mb-20 font-sans"> */}
      <div className="overflow-x-auto font-sans">
        <table className="table-auto border-collapse border border-gray-800 w-full text-sm md:text-base sm:text-justify sm:text-sm sm:overflow-x-auto md:overflow-x-auto">
          <thead>
            <tr className="bg-gray-200 font-medium">
              <th className="border border-gray-800 px-4 py-2 hidden sm:table-cell">
                Seq. No
              </th>
              <th className="border border-gray-800 px-4 py-2">First Name</th>
              <th className="border border-gray-800 px-4 py-2">Last Name</th>
              <th className="border border-gray-800 px-4 py-2">User ID</th>
              <th className="border border-gray-800 px-4 py-2">Role</th>
              <th className="border border-gray-800 px-4 py-2">
                Salary (Birr)
              </th>
              <th className="border border-gray-800 px-4 py-2">
                Emergency Contact
              </th>
              <th className="border border-gray-800 px-4 py-2">Bonus</th>
              <th className="border border-gray-800 px-4 py-2">Punishment</th>
              <th className="border border-gray-800 px-4 py-2">Edit</th>
              <th className="border border-gray-800 px-4 py-2">Terminate</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.userid} className="bg-gray-100">
                <td className="border border-gray-800 px-4 py-2 hidden sm:table-cell">
                  {index + 1}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {employee.firstName}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {employee.lastName}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {employee.userid}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {employee.role}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {employee.salary}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {employee.emergencyContact}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {editedEmployee === employee ? (
                    <input
                      type="text"
                      value={editedBonus}
                      className="outline-none bg-gray-300"
                      onChange={(e) => setEditedBonus(e.target.value)}
                    />
                  ) : (
                    employee.bonus
                  )}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {editedEmployee === employee ? (
                    <input
                      type="text"
                      value={editedPunishment}
                      className="outline-none bg-gray-300"
                      onChange={(e) => setEditedPunishment(e.target.value)}
                    />
                  ) : (
                    employee.punishment
                  )}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {editedEmployee === employee ? (
                    <div>
                      <button
                        onClick={handleSave}
                        className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 mb-2 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditedEmployee(null)}
                        className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEdit(employee)}
                      className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  <button
                    onClick={() => handleDelete(employee.userid)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Terminate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FetchData;
