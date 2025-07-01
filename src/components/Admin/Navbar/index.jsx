import React, { useContext } from 'react'
import { IoIosNotifications } from "react-icons/io";
import icon from "../../../assets/images/Admin/icon.avif"
import { useTranslation } from 'react-i18next';
import { RoleContext } from '../../../Context/RolesContext';
function Navbar() {

  const { t, i18n } = useTranslation();
  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }
  const { UserRole } = useContext(RoleContext);
  // const userRole = localStorage.getItem("userRole");
    // const userRole = "manager";
  return (
    <div className='navbarr'>
      {UserRole === "admin"?<h2>  POS(Point of Sales) v3.0</h2>:<h2 style = {{backgroundColor:"transparent"}}></h2>}
      <div className="navbar-right">
        <select onChange={(e)=>handleLanguage(e.target.value)}>
          <option value="az">az</option>
           <option value="en">en</option>
        </select>
        <span className={UserRole === "admin"? "time": "time-m"}>11 : 13 : 31 AM</span>
        <span><IoIosNotifications /></span>
        <div className="user-info">
          <span className='user-name'>{UserRole=== "admin"?"Admin":"Manager"}</span>
     
            <img src={icon} alt="user avatar" />
        </div>
      </div>
    </div>
  )
}

export default Navbar