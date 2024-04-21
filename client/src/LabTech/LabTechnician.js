import "./LabTechnician.css";
import Navigation from "./Navigation";
//import { Link } from "react-router-dom"

function LabTechnician() {
  return (
    <>
      <Navigation />
      <div className="main-element">
      <div className="labpage">
        <div className="announcement">
          <h1 className="title1">Announcement</h1>
          <div className="element"></div>
        </div>
        <div className="todo-list">
          <h1 className="title2">To do list</h1>
          <div className="list"></div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default LabTechnician;
