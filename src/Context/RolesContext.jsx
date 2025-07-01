import React, { createContext, useEffect, useState } from "react";
// import controller from "../Api/controllers";
// import { endpoints } from "../Api/constants";

export const RoleContext = createContext(null);

const RoleProvider = ({ children }) => {
    const [UserRole,setUserRole] =useState("admin");

//   const getAllDoctors = async () => {
//     const {data} = await controller.getAllData(endpoints.doctors);
//     setDoctors(data);
//   };
//   useEffect(() => {
//     getAllDoctors();
//   }, [])
  
  return (
    <>
      <RoleContext.Provider
        value={{ UserRole }}
      >
        {children}
      </RoleContext.Provider>
    </>
  );
};

export default RoleProvider;
