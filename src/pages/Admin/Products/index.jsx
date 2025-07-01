import React from "react";
import DynamicPage from "../../../components/Admin/DynamicPage";
import { useTranslation } from "react-i18next";
import { useAddReservationMutation, useGetReservationsQuery } from "../../../redux/services/ReservationService";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
];

function Products() {
  const { t } = useTranslation();

  const { data, isLoading, isError, refetch } = useGetReservationsQuery();

  
  const [addReservation] = useAddReservationMutation();

  if (isLoading) return <h1>{t("Loading...")}</h1>;
  if (isError) return <h1>{t("Error loading data")}</h1>;


  const handleAddReservation = async (values) => {
    try {
      await addReservation(values).unwrap();
      refetch(); 
      alert(t("Reservation added successfully"));
    } catch (error) {
      alert(t("Error adding reservation"));
      console.error(error);
    }
  };

  return (
    <DynamicPage
      columns={columns}
      data={data?.data}
      onSubmit={handleAddReservation} 
    />
  );
}

export default Products;
