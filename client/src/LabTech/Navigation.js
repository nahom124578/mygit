import {NavLink , Link, useLocation , Route, Routes} from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  const location = useLocation();
  const activeLinkStyle = {
    opacity: 0.5
  };
  return (
    <>
      <header className='navbar' >
        
        <div className="menu">
          <i class="fa fa-bars"></i>
        </div>
        <ul className='navlist'>
            <li >
              <Link  to="/labtechnician" className={location.pathname === '/labtechnician' ? 'listItems active' : 'listItems'} >Home</Link>
            </li>
            <li>
              <Link to="/labtechnician/news" className={location.pathname === '/labtechnician/news' ? 'listItems active' : 'listItems'} >News</Link>
            </li>
            <li className='rep'>
              <Link to="/labtechnician/result" className={location.pathname === '/labtechnician/result' ? 'listItems active' : 'listItems'} >Report</Link>
            </li>
            
        </ul>
        <div ><Link to="/labtechnician/profile"  className='profile'><img  src="" className="profile-pic" /></Link></div>
      

      </header>
      
      
    </>
  );
}

export default Navigation;
