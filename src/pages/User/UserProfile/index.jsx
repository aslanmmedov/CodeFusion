import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
function UserProfile() {
    return (
        <div className='profile-content'>
          
                <ul>
                    <li>
                        <NavLink>Profile</NavLink>
                    </li>
                    <li> <NavLink>Change Password</NavLink></li>
                    <li> <NavLink>My Rezervations</NavLink></li>
                    <li> <NavLink>2FA settings</NavLink></li>
                </ul>
        
            <div className="profile-content">

            </div>
        </div>
    )
}

export default UserProfile