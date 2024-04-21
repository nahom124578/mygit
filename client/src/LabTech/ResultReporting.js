import React, { useState } from "react";
import Navigation from "./Navigation";
import "./ResultReporting.css";

function ResultReporting() {
  const [testResult, setTestResult] = useState([]);
  const [patientID, setPatientID] = useState("");
  const [requestID, setRequstID] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());

  const [testName, setTestName] = useState("");
  const [testType, setTestType] = useState("");
  const [testValue, setValue] = useState(null);
  const [testUnit, setUnit] = useState("");
  const [person, setPerson] = useState("");
  const [ID, setID] = useState("");

  function handlePatientID(event) {
    setPatientID(event.target.value);
  }
  function handleRequstID(event) {
    setRequstID(event.target.value);
  }

  function handleYear(event) {
    setYear(event.target.value);
  }

  function handleMonth(event) {
    setMonth(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleHour(event) {
    setHour(event.target.value);
  }

  function handleMinute(event) {
    setMinute(event.target.value);
  }

  function handleTestName(event) {
    setTestName(event.target.value);
  }

  function handleTestType(event) {
    setTestType(event.target.value);
  }

  function handkeValue(event) {
    setValue(event.target.value);
  }

  function handleUnit(event) {
    setUnit(event.target.value);
  }

  function handlePerson(event) {
    setPerson(event.target.value);
  }

  function handleID(event) {
    setID(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTest = {
      pID: patientID,
      rID: requestID,
      tyear: year,
      tmonth: month,
      tdate: date,
      thour: hour,
      tminute: minute,
      tname: testName,
      ttype: testType,
      tvalue: testValue,
      tunit: testUnit,
      tperson: person,
      tID: ID,
    };

    setTestResult((t) => [...t, newTest]);

    setPatientID("");
    setRequstID("");
    setTestName("");

    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth());
    setDate(new Date().getDate());
    setHour(new Date().getHours());
    setMinute(new Date().getMinutes());

    setTestType("");
    setValue(0);
    setUnit("");
    setPerson("");
    setID("");
  }

  return (
    <>
      <Navigation />
      <div className="container">
        <form onSubmit={handleSubmit} className="forms">
          <h1 className="title">Report form</h1>

          <label htmlFor="pID">Patient ID</label>
          <input
            type="text"
            id="pID"
            onChange={handlePatientID}
            value={patientID}
            required
          />

          <label htmlFor="rID">Request ID</label>
          <input
            type="text"
            id="rID"
            onChange={handleRequstID}
            value={requestID}
            required
          />

          <label htmlFor="tname">Test Name</label>
          <input
            type="text"
            id="tname"
            onChange={handleTestName}
            value={testName}
          />

          <label htmlFor="tyear"> Test Date</label>
          <label htmlFor="">yyyy mm dd hh mm</label>
          <div className="date-cont">
            <input type="number" id="year" onChange={handleYear} value={year} />
            <input
              type="number"
              id="month"
              onChange={handleMonth}
              value={month}
            />
            <input type="number" id="date" onChange={handleDate} value={date} />
            <input type="number" id="hour" onChange={handleHour} value={hour} />
            <input
              type="number"
              id="minute"
              onChange={handleMinute}
              value={minute}
            />
          </div>

          <label htmlFor="ttype">Test Type</label>
          <input
            type="text"
            id="ttype"
            onChange={handleTestType}
            value={testType}
          />

          <label htmlFor="value">Test Value</label>
          <input
            type="number"
            id="value"
            onChange={handkeValue}
            value={testValue}
          />

          <label htmlFor="unit">Test Unit</label>
          <input type="text" id="unit" onChange={handleUnit} value={testUnit} />

          <label htmlFor="person">Checked By</label>
          <input
            type="text"
            id="person"
            onChange={handlePerson}
            value={person}
            required
          />

          <label htmlFor="ID">Sign</label>
          <input type="text" id="ID" onChange={handleID} value={ID} required />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <ul>
          {testResult.map((result, index) => (
            <li key={index}>
              <h1>ghg</h1>
              <div>
                {result.ctype} {result.ID} {result.tname} {result.tunit}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ResultReporting;
