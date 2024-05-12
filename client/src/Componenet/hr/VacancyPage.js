import React, { useEffect, useState } from "react";
import axios from "axios";
import JobApplicationPage from "./JobApplicationSent";
const Home = () => {
  const [latestVacancy, setLatestVacancy] = useState(null); // Initialize state with null, since initially, there's no vacancy
  const [showForms, setShowForm] = useState(false);
  useEffect(() => {
    const fetchLatestVacancy = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getVacancy");
        if (response.data) {
          setLatestVacancy(response.data); // Set the latest vacancy
        }
      } catch (error) {
        console.error("Error fetching latest vacancy:", error);
      }
    };
    fetchLatestVacancy();
  }, []);
  const handleVacancy = () => {
    // <JobApplicationPage />;
    setShowForm(true);
    console.log("here is APPLy");
  };
  return (
    <>
      <div className=" mt-40 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 font-sans">
        <div className=" text-2xl mt-10 border-b-8 mb-4 ">
          {" "}
          hey we need a highly motivatitional person
        </div>
        <div className=" text-md bg-gray-50 border-b-8 px-2">
          {latestVacancy ? ( // Check if latestVacancy is not null before rendering
            <div key={latestVacancy._id}>
              <strong>Title of Job:</strong> {latestVacancy.jobTitle}
              <li className="mt-3 mb-3">
                {" "}
                <strong>Description : </strong> {latestVacancy.jobDescription}
              </li>
              <li className="mt-3 mb-3">
                <strong>preferredQualifications :</strong>{" "}
                {latestVacancy.preferredQualifications}
              </li>
              <li className="mt-3 mb-3">
                {" "}
                <strong>requiredQualifications</strong>{" "}
                {latestVacancy.requiredQualifications}
              </li>
              <li className="mt-3 mb-3">
                {" "}
                <strong>applicationInstructions</strong>{" "}
                {latestVacancy.applicationInstructions}
              </li>
              <li className="mt-3 mb-3">
                <strong className="">Salary </strong>Negotiable
              </li>
              <li>
                <strong>place of works </strong>Addis ababa{" "}
              </li>
              <li className="mt-3 mb-3">
                {" "}
                <strong>publishDate :</strong> {latestVacancy.publishDate}
              </li>
              <li>
                <strong>Deadline </strong> {latestVacancy.Deadline}
              </li>
            </div>
          ) : (
            <li>No vacancy available</li>
          )}
        </div>
        <div>
          <span className="text-lg text-black">
            How can i Apply for this Position ? <br /> Please only Apply if u
            met the criteria above Follow the above instruction carefully to
            apply
          </span>{" "}
          <br />
          <li>
            <button
              type="submit"
              onClick={handleVacancy}
              className="bg-red-200 mx-auto text-white mb-3 rounded-md hover:bg-blue-600 focus:outline-none mt-8 focus:bg-blue-600 "
            >
              Apply
            </button>
          </li>
          <p>
            Here below is The Application Page please provides only Accurate
            VAlue{" "}
          </p>
          {showForms && <JobApplicationPage />}
        </div>
      </div>
    </>
  );
};
export default Home;
