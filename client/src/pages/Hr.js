import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import AnnounceVacancy from "../Componenet/hr/VacancyForm.js";
import FireEmployee from "../Componenet/hr/Fire.js";
import HireForm from "../Componenet/hr/HireForm.js";
import ForPhoto from "../Componenet/hr/ForPhoto.js";
function Hr() {
  const styleforNav = {
    position: "sticky",
    top: 0,
    zIndex: 10,
  };

  const showHomeMessage = () => {
    alert("this will be the one when touched return me to home ");
  };

  return (
      <>
        <nav
          style={styleforNav}
          class="fixed bg-white-800 text-black w-64 h-screen p-5 z-10"
        >
            {/* <img
            
            alt="notification images"
            className="rounded-2xl ml-2 h-8 mb-3 mt-3 lg:w-24 lg:h-16 lg:mb-10"
            /> */}
            <button className=""></button>
            <ul className="flex flex-col items-center space-y-4 text-black mt-100">
                <li
                    className="cursor-pointer hover:bg-sky-700 hover:h-12"
                    onClick={showHomeMessage}>Home
                </li>
                <li className="hover:bg-gray-500 px-4 py-2">
                    <Link to="/em">EmployeList</Link>
                </li>
                <li className="hover:bg-gray-500 px-4 py-2">
                    <Link to="/fireEmployee">Fire employe</Link>
                </li>
                <li className="hover:bg-rad-500 px-4 py-2">
                    <Link to="/hireForm">Hire employe</Link>
                </li>
      
                <li className="flex cursor-pointer hover:bg-sky-700 hover:h-12">
                     <Link to="/announceVacancy">Vacancy</Link>
                </li>
            </ul>
        </nav>
        {/* <Routes>
          <Route path="" element={<ForPhoto />} />
          <Route path="/" element={<FireEmployee />} />
          <Route path="/" element={<HireForm />} />
          <Route path="announceVacancy" element={<AnnounceVacancy />} />
        </Routes> */}
      </>
  );
}

export default Hr;
