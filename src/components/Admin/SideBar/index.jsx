import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { FaAppStore, FaChartLine, FaHome, FaUsers, FaUserSecret } from "react-icons/fa";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { FaUserGroup } from "react-icons/fa6";
import { MdHotel } from "react-icons/md";
import { MdOutlineHotelClass } from "react-icons/md";
import { TbHotelService } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { RoleContext } from '../../../Context/RolesContext';
function Sidebar() {
    const {t} = useTranslation();
    // const userRole = localStorage.getItem("userRole");
    const userRole = "admin";
    const { UserRole } = useContext(RoleContext);
    return (
        <div className={UserRole === "admin"? "sidebarr": "sidebar-m"}>
            {UserRole === "admin"?<h1>Admin {t("system")}</h1>:<h1><div className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_epjBWVR39v49aGbeJC-1CDNsoWKfqvGnIg&s" alt="" /></div>Deluxe Manager {t("system")}</h1>} 
            <ul>
                <li>
                    <NavLink to={""} end className={({ isActive }) => isActive ? "navlink active" : "navlink"}>   
                        <FaHome /> {t("Əsas Səhifə")}
                    </NavLink>
                </li>

                {/* Admin-only links */}
                {UserRole === "admin" && (
                    <>
                        <li>
                            <NavLink to={"otaqlar"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                                <FaAppStore /> {t("Otaqlar")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"istifadeçiler"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                                <FaUserGroup /> {t("İstifadəçilər")}
                            </NavLink>
                        </li>
                    </>
                )}

                {/* Shared links */}
                <li>
                    <NavLink to={"müşteriler"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                        <MdHotel /> {t("Müştərilər")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"rezervasiyalar"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                        <MdOutlineHotelClass /> {t("Rezervasiyalar")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"xidmetler"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                        <TbHotelService /> {t("Xidmətlər")}
                    </NavLink>
                </li>
                <li>
                    <button className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                            <BiLogOut /> {t("Exit")}
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
