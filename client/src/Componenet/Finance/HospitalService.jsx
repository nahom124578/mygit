import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./custom-ag-grid.css";

const HospitalService = () => {
  const [colDefs] = useState([
    { field: "service_id" },
    { field: "name" },
    { field: "description" },
    { field: "department" },
    { field: "paidAmount" },
    { field: "paymentMethod" },
    { field: "payerName" },
  ]);

  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    // Fetch data from the API
    fetch("http://127.0.0.1:8000/api/v1/services")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((givenservice) => {
        // Store the fetched data in the state
        setRowData(givenservice);
      })
      .catch((error) => {});
  }, []);

  return (
    <div style={{ width: "98%" }}>
      <div>
        {" "}
        <h3 style={{ fontSize: 24, textAlign: "center", fontWeight: "bolder" }}>
          {" "}
          Given Services{" "}
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

export default HospitalService;
