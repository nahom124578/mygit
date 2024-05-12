import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomeContent.css";
import Admin from "../asset/admin.png";
import Other from "../asset/other.png";
import Doctor from "../asset/doctor.png";
import Manager from "../asset/manager.png";
import Payment from "../asset/payment.png";
import Pharm from "../asset/pharma.png";
import Lab from "../asset/lab.png";
import Radio from "../asset/radiology.png";
const Homee = () => {
  const [numDocter, setNumDocter] = useState(0);
  const [numManager, setNumManager] = useState(0);
  const [numPharm, setNumPharm] = useState(0);
  const [numAdmin, setNumAdmin] = useState(0);
  const [numLab, setNumLab] = useState(0);
  const [numRadio, setNumRadio] = useState(0);
  const [numOther, setNumOther] = useState(0);
  const fetchEmployeeCounts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/count");
      const counts = response.data;

      setNumDocter(getCount(counts, "Doctor"));
      setNumManager(getCount(counts, "Manager"));
      setNumPharm(getCount(counts, "Pharmacist"));
      setNumAdmin(getCount(counts, "Admin"));
      setNumLab(getCount(counts, "LabTechnician"));
      setNumRadio(getCount(counts, "Radiologist"));
      setNumOther(getCount(counts, "Other Staff Member"));
    } catch (error) {
      console.error("Error fetching employee counts:", error);
    }
  };

  const getCount = (counts, role) => {
    const count = counts.find((item) => item._id === role);
    console.log(counts);
    return count ? count.count : 0;
  };

  useEffect(() => {
    fetchEmployeeCounts();
  }, []);

  return (
    <div>
      <div class="grid-container">
        <div class="home-page">
          <img src={Manager} alt="" />
          <h1>Manager-{numManager}</h1>
        </div>
        <div id="docter" class="home-page">
          <img src={Doctor} alt="" />
          <h1>Doctor-{numDocter}</h1>
        </div>

        <div id="admin" class="home-page">
          <img src={Admin} alt="" />
          <h1>Admin-{numAdmin}</h1>
        </div>
        <div id="LabTechnician" class="home-page">
          <img src={Pharm} alt="" />
          <h1>Pharmacist-{numPharm}</h1>
        </div>
        <div id="LabTechnician" class="home-page">
          <img src={Lab} alt="" />
          <h1>Lab Technician-{numLab}</h1>
        </div>
        <div id="nurse" class="home-page">
          <img src={Radio} alt="" />
          <h1>Radiologist-{numRadio}</h1>
        </div>
        <div id="staff" class="home-page">
          <img src={Other} alt="Admin" />
          <h1>Other Staff member-{numOther}</h1>
        </div>
      </div>
    </div>
  );
};
export default Homee;
