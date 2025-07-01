import "./Services.css"
import { FaConciergeBell } from "react-icons/fa";
import { FaCarOn } from "react-icons/fa6";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { FaHandHoldingDroplet } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services">
        <div className="row container8">
            <div className="col-3 service">
                <div className="icon">
                    <FaConciergeBell size={50} style={{color: "#8D703BFF"}}/>
                </div>
                <div className="service_title">
                    <h3>24/7 Front Desk</h3>
                </div>
                <div className="service_content">
                    <p>A small river named Duden flows by their place and supplies.</p>
                </div>
            </div>
            <div className="col-3 service">
                <div className="icon">
                    <FaHandHoldingDroplet size={50} style={{color: "#8D703BFF"}}/>
                </div>
                <div className="service_title">
                    <h3>Restaurant Bar</h3>
                </div>
                <div className="service_content">
                    <p>A small river named Duden flows by their place and supplies.</p>
                </div>
            </div>
            <div className="col-3 service">
                <div className="icon">
                    <FaCarOn size={50} style={{color: "#8D703BFF"}}/>
                </div>
                <div className="service_title">
                    <h3>Transfer Services</h3>
                </div>
                <div className="service_content">
                    <p>A small river named Duden flows by their place and supplies.</p>
                </div>
            </div>
            <div className="col-3 service">
                <div className="icon">
                    <FaCartFlatbedSuitcase size={50} style={{color: "#8D703BFF"}}/>
                </div>
                <div className="service_title">
                    <h3>Spa Suites</h3>
                </div>
                <div className="service_content">
                    <p>A small river named Duden flows by their place and supplies.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services