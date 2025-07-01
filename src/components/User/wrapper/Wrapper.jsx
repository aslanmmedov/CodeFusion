import { useState } from "react";
import { FaUserCircle, FaCog, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import "./Wrapper.css";

const Wrapper = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="wrapper">
      <button className="dashboard-btn">
        <FaTachometerAlt /> Dashboard
      </button>

      <div className="user-dropdown">
        <div className="user-icon" onClick={toggleDropdown}>
          <FaUserCircle size={28} />
        </div>

        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <FaCog className="icon" />
              Account Settings
            </li>
            <li>
              <FaSignOutAlt className="icon" />
              Logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Wrapper;
