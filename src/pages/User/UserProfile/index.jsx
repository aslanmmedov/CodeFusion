import React, { useState } from 'react';
import './index.scss';
import Profile from '../../../components/User/Profile';
import ChangePassword from '../../../components/User/ChangePasw';


function UserProfile() {
  const [activeComponent, setActiveComponent] = useState("profile");

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <Profile />;
      case "change-password":
        return <ChangePassword/>;
      case "reservations":
        return <MyReservations />;
      case "2fa":
        return <TwoFASettings />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className='profile-content'>
      <ul>
        <li>
          <button onClick={() => setActiveComponent("profile")}>Profile</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent("change-password")}>Change Password</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent("reservations")}>My Reservations</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent("2fa")}>2FA Settings</button>
        </li>
      </ul>

      <div className="profile-content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default UserProfile;
