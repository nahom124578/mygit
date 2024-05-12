import React, { useState } from "react";
import './Result.css'
import axios from 'axios'


function ResultReporting() {
    const [data, setData] = useState({})
    function handleChange(e) {
        setData({...data, [e.target.id]: e.target.value})
    }
    async function handleSub(e) {
        e.preventDefault()
        console.log("this is called")
        try {
            await axios.post('/api/labresult', data)
            alert("Laboratory report successfully sent")
        }
        catch {
            if(!data.patientID || !data.requestID || !data.person || !data.ID){
                alert("Please fill all required field")
            }
            else{
                alert("Unable to report data. Try again later.")
            }
            
            console.log("Error has occured")
        }

    }

    return(
        <>
        
        
        <div className="container">
            
            <form className="forms">
                
                <h1 className="title">Report form</h1>
                
                <label htmlFor="patientID">Patient ID</label>
                
                <input type="text" id="patientID"  name = "pID" onChange = {handleChange} required />
                
                <label htmlFor="requestID">Request ID</label>
                
                <input type="text" id="requestID" name = "rID" onChange = {handleChange} required/>
                
                <label htmlFor="testName">Test Name</label>
                
                <input type="text" id="testName" name = "tname" onChange = {handleChange} />
                
                <label htmlFor="">Enter the date here: </label>
                <div className="date-cont">
                    <input type = 'date' id="testDate" onChange = {handleChange} required></input>
                </div>

                <label htmlFor="testType">Test Type</label>
                <input type="text" id="testType" name = "ttype"  onChange = {handleChange}/>
                
                <label htmlFor="testValue">Test Value</label>
                <input type="number" id="testValue" name = "testValue"  onChange = {handleChange}  />
                
                <label htmlFor="unit">Test Unit</label>
                <input type="text" id="unit" name = "unit"  onChange = {handleChange} />
                
                <label htmlFor="person">Checked By</label>
                <input type="text" id="person" name = "person"  onChange = {handleChange} required />
                
                <label htmlFor="ID">Sign</label>
                <input type="password" id="ID"  name = "ID" onChange = {handleChange} required />
                
                <button type="submit" onClick = {handleSub}>Submit</button>
            </form>
        </div>
        </>
    );
}

export default ResultReporting;