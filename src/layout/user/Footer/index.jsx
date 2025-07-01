import Logo from "../../../components/User/logo/Logo";
import "./Footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container8">
        <div className="footer-top">
        <div className="footer-logo-section">
          <h4 style={{fontSize: "20px", color: "#fff"}}>DELUXE</h4>
          <p className="footer-description">
            The floristry business has a significant market in the corporate and social event world, as flowers
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF/></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaLinkedinIn/></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Servcies</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Account</h3>
          <ul>
            <li>My cart</li>
            <li>Wisslist</li>
            <li>Login/Register</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get more free tips. No Spam, Promise.</p>
          <input type="email" placeholder="Email" />
          <button>SUBSCRIBE</button>
        </div>

        <div className="footer-column">
          <h3>Get in touch</h3>
          <p>
            69 North Cleveland Street, Memphis,USA.<br />
            (123) 8111 9210 - (012) 1111 6868<br />
            Florisr@supportthem.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with <span className="heart">♥</span> by Colorlib
        </p>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer
