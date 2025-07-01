
import PieChartComponent from "../../../components/Admin/CircleChart";
import { FiUsers } from "react-icons/fi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiHotel } from "react-icons/bi";
import { TbHotelService } from "react-icons/tb";
import "./style.scss"
import { RoleContext } from "../../../Context/RolesContext";
import { useContext } from "react";
function Dashboard() {
  // const userRole = localStorage.getItem("userRole");
  const { UserRole } = useContext(RoleContext);
  return (
    <>
      <div className={UserRole === "admin"? "h-cards": "m-cards"}>
        <h1>Ümumi nəzarət</h1>
        <div className="cards">
          <div className="s-card">
            <i><FiUsers /></i>
            <div className="txt">
              <h2>İstifadəçilər</h2>
              <p>265</p>
            </div>
          </div>
          <div className="s-card">
            <i><MdOutlineBedroomParent /></i>
            <div className="txt">
              <h2>Boş otaqlar</h2>
              <p>110</p>
            </div>
          </div>
          <div className="s-card">
            <i><BiHotel /></i>
            <div className="txt">
              <h2>Müştərilər</h2>
              <p>420</p>
            </div>
          </div>
          <div className="s-card">
            <i><TbHotelService /></i>
            <div className="txt">
              <h2>Rezervasiyalar</h2>
              <p>300</p>
            </div>
          </div>
        </div>
      </div>
      <div className={UserRole === "admin"? "circleChart": "c-chart"}>
        <h2>Doluluq qrafiki</h2>
        <PieChartComponent />
      </div>
    </>
  );
}

export default Dashboard;
