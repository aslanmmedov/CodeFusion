import React, { useContext } from "react";
import DynamicPage from "../../../components/Admin/DynamicPage";
import { useTranslation } from "react-i18next";

import { RoleContext } from "../../../Context/RolesContext";
import { useGetReservationsQuery } from "../../../redux/services/ReservationService";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
function Products() {
  const { t } = useTranslation();

  const { UserRole } = useContext(RoleContext);
let {data,isLoading,isError} = useGetReservationsQuery()

  if (isLoading) {
    return <h1>{t("Loading...")}</h1>;
  }

  if (isError) {
    return <h1>{t("Error loading data")}</h1>;
  }


  return (
     <DynamicPage columns={columns} data={dataSource}/>
  );
}


export default Products;
