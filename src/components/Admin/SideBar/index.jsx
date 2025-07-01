import React from 'react'
import { NavLink } from "react-router-dom";
import { FaAppStore, FaChartLine, FaHome, FaUsers, FaUserSecret } from "react-icons/fa";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';


function Sidebar() {
    const {t} = useTranslation();
    // const userRole = localStorage.getItem("userRole");
    const userRole = "admin";

    return (
        <div className={userRole === "admin"? "sidebarr": "sidebar-m"}>
            {userRole === "admin"?<h1>Admin {t("system")}</h1>:<h1>Manager {t("system")}</h1>}
            <ul>
                <li>
                    <NavLink to={""} end className={({ isActive }) => isActive ? "navlink active" : "navlink"}>   
                        <FaHome /> {t("Dashboard")}
                    </NavLink>
                </li>

                {/* Admin-only links */}
                {userRole === "admin" && (
                    <>
                        <li>
                            <NavLink to={"stores"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                                <FaAppStore /> {t("Otaqlar")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"users"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                                <FaUsers /> {t("İstifadəçilər")}
                            </NavLink>
                        </li>
                    </>
                )}

                {/* Shared links */}
                <li>
                    <NavLink to={"suppliers"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                        <FaUserSecret /> {t("Müştərilər")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"products"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                        <FaChartLine /> {t("Rezervasiyalar")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"orders"} className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
                        <BsFillCartCheckFill /> {t("Xidmətlər")}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
