import React from "react";
import "../style/Footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contain">
        <div className="footer-logo">
          <h1>Sacha</h1>
        </div>

        <div className="footer-info">
          <ul>
            <li>Conditions utilisations</li>
            <li>GCPD</li>
            <li>Contact</li>
            <li>Job</li>
          </ul>
        </div>
        <div className="footer-contact">
          <div className="address">
            <LocationOnIcon />
            <p>22 Happy coding Street 1000 Bruxelles</p>
          </div>
          <div className="email">
            <EmailIcon/>
            <p>sacha@happycoding.com</p>
          </div>
          <div className="phone">
            <PhoneIphoneIcon/>
            <p>+32(0)123 45 67 89</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
