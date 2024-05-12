import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./custom-ag-grid.css";
import SimpleComp from "./TakeAction";
const EmployeeTable = () => {
  const [colDefs] = useState([
    { field: "Take Action", cellRenderer: SimpleComp },
    // { field: "name" },
    { field: "firstName" },
    // { field: "employeeID" },
    // { field: "bankName" },
    { field: "bank" },
    { field: "userid" },
    // { field: "bankAccountNumber" },
    { field: "isPaid" },
    { field: "onleave" },
    { field: "salary" },
    { field: "bonus" },
    { field: "punishment" },
    // { field: "currentMonthPenalty" },
    // { field: "outstandingDebt" },
  ]);

  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    // Fetch data from the API :
    fetch("http://localhost:8000/api/v1/salary")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Store the fetched data in the state
        setRowData(data);
      })
      .catch((error) => {});
  }, []);
  return (
    <div style={{ width: "98%" }}>
      <div>
        {" "}
        <h3 style={{ fontSize: 24, textAlign: "center", fontWeight: "bolder" }}>
          {" "}
          Salary Payment{" "}
        </h3>
      </div>
      <div
        style={{
          marginLeft: "1%",
          display: "flex",
          width: "100%",
          height: "500px",
        }}
      >
        <div style={{ flex: "1", overflow: "hidden" }}>
          <div
            className="ag-theme-alpine"
            style={{ height: "100%", width: "100%" }}
          >
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeTable;
