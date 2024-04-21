import { useState } from "react";
import "./Feedback.css";
import NavBarp from "./NavBarp"
// Define a functional component named Form
function Feedback() {
  const [showOverallForm, setShowOverallForm] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const PopupOpen = () => {
    setShowPopup(true);
  };

  const PopupClose = () => {
    setShowPopup(false);
  };

  // Function to handle department selection
  const handleDepartmentSelection = (event) => {
    const selectedDept = event.target.value;
    setSelectedDepartment(selectedDept); //selects target value from dropdown menu
    //Hide overall form when department is selected
  };

  // Function to handle overall satisfaction button click
  const handleOverallButtonClick = () => {
    setShowOverallForm(true); // Show overall form when button is clicked
  };
  // Function to handle form submission
  const handleSubmit = () => {
    setShowThankYouMessage(true); //display thank you message when form is submitted
    setShowOverallForm(false); // hide overallForm
    setSelectedDepartment(false); //hide department
  };
  // Function to render overall satisfaction form
  function OverAllform() {
    return (
      <> <NavBarp/>
      <div id="overall-satisfaction">
        <table className="feedback-table">
          <thead>
            <tr>
              <th rowSpan="1" id="head">
                Aspect
              </th>
              <th colSpan="6">Satisfaction Level</th>
            </tr>
            <tr>
              <th></th>
              <th>Very satisfied</th>
              <th>Satisfied</th>
              <th>Neutral</th>
              <th>Unsatisfied</th>
              <th>Very unsatisfied</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Practitioner Knowledge</td>
              <td>
                <input type="radio" name="knowledge" value="Very satisfied" />
              </td>
              <td>
                <input type="radio" name="knowledge" value="Satisfied" />
              </td>
              <td>
                <input type="radio" name="knowledge" value="Neutral" />
              </td>
              <td>
                <input type="radio" name="knowledge" value="Unsatisfied" />
              </td>
              <td>
                <input type="radio" name="knowledge" value="Very unsatisfied" />
              </td>
            </tr>
            <tr>
              <td>Practitioner Kindness</td>
              <td>
                <input type="radio" name="kindness" value="Very satisfied" />
              </td>
              <td>
                <input type="radio" name="kindness" value="Satisfied" />
              </td>
              <td>
                <input type="radio" name="kindness" value="Neutral" />
              </td>
              <td>
                <input type="radio" name="kindness" value="Unsatisfied" />
              </td>
              <td>
                <input type="radio" name="kindness" value="Very unsatisfied" />
              </td>
            </tr>
            <tr>
              <td>Practitioner Communication Skill</td>
              <td>
                <input
                  type="radio"
                  name="communication"
                  value="Very satisfied"
                />
              </td>
              <td>
                <input type="radio" name="communication" value="Satisfied" />
              </td>
              <td>
                <input type="radio" name="communication" value="Neutral" />
              </td>
              <td>
                <input type="radio" name="communication" value="Unsatisfied" />
              </td>
              <td>
                <input
                  type="radio"
                  name="communication"
                  value="Very unsatisfied"
                />
              </td>
            </tr>
            <tr>
              <td>Waiting Time</td>
              <td>
                <input type="radio" name="waiting" value="Very satisfied" />
              </td>
              <td>
                <input type="radio" name="waiting" value="Satisfied" />
              </td>
              <td>
                <input type="radio" name="waiting" value="Neutral" />
              </td>
              <td>
                <input type="radio" name="waiting" value="Unsatisfied" />
              </td>
              <td>
                <input type="radio" name="waiting" value="Very unsatisfied" />
              </td>
            </tr>
            <tr>
              <td>Hygiene</td>
              <td>
                <input type="radio" name="hygiene" value="Very satisfied" />
              </td>
              <td>
                <input type="radio" name="hygiene" value="Satisfied" />
              </td>
              <td>
                <input type="radio" name="hygiene" value="Neutral" />
              </td>
              <td>
                <input type="radio" name="hygiene" value="Unsatisfied" />
              </td>
              <td>
                <input type="radio" name="hygiene" value="Very unsatisfied" />
              </td>
            </tr>
            <tr>
              <td>Quality of Care</td>
              <td>
                <input type="radio" name="care" value="Very satisfied" />
              </td>
              <td>
                <input type="radio" name="care" value="Satisfied" />
              </td>
              <td>
                <input type="radio" name="care" value="Neutral" />
              </td>
              <td>
                <input type="radio" name="care" value="Unsatisfied" />
              </td>
              <td>
                <input type="radio" name="care" value="Very unsatisfied" />
              </td>
            </tr>
            <tr>
              <td>Rate your Experience</td>
              <td>
                <input type="radio" name="experience" value="Very satisfied" />
              </td>
              <td>
                <input type="radio" name="experience" value="Satisfied" />
              </td>
              <td>
                <input type="radio" name="experience" value="Neutral" />
              </td>
              <td>
                <input type="radio" name="experience" value="Unsatisfied" />
              </td>
              <td>
                <input
                  type="radio"
                  name="experience"
                  value="Very unsatisfied"
                />
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </>
    );
  }

  return (
    <>
      <div className="feedback-container">
        <div className="feedback-form">
          <div id="heading">
            <h1 className="text-black flex">Feedback Form</h1>
            <h2>Take a moment to fill the form</h2>
          </div>

          <div id="tables">
            <dv id="selection">
              <form>
                <label htmlFor="department" className="LABEL">
                  Choose a department:
                </label>
                <select id="department" name="department">
                  <option value="Select">Select</option>
                  <option value="Doctors" onClick={handleDepartmentSelection}>
                    Doctors
                  </option>
                  <option
                    value="Pharmacists"
                    onClick={handleDepartmentSelection}
                  >
                    Pharmacists
                  </option>
                  <option
                    value="Lab Technicians"
                    onClick={handleDepartmentSelection}
                  >
                    Lab Technicians
                  </option>
                  <option
                    value="Radiologists"
                    onClick={handleDepartmentSelection}
                  >
                    Radiologists
                  </option>
                  <option
                    value="Receptionist"
                    onClick={handleDepartmentSelection}
                  >
                    Receptionist
                  </option>
                  <option value="Manager" onClick={handleDepartmentSelection}>
                    Manager
                  </option>
                </select>
                <br />
                <br />
              </form>
            </dv>

            <div id="form">{true && OverAllform()}</div>
            <div id="suggestion">
              <h2>How can we improve our service?</h2>
              <textarea
                id="improvement"
                name="improvement"
                placeholder="Type here..."
                rows="4"
                required
              ></textarea>
              <button className="mybut bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center
              " type="button" onClick={PopupOpen}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>


      {showPopup && (
        <>
          <div className="overlay"></div>
          <div className="popup" id="popup">
            <h1 id="doctorHeading">Response recoded</h1>
            <p>Lorem ipsum dolor sit amet</p>
            <button type="button" onClick={PopupClose}>
              Close
            </button>
          </div>
        </>
      )}



    </>
  );
}

export default Feedback;
