import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer-wrapper container-8">
        <div className="footer-content">
          <div className="footer-logo">
            <img className="img" src="assets/restaurant.jpg" alt="Little Lemon Logo" />
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/#hero">Home</Link></li>
                <li><Link to="/#menu">Menu</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#reservations">Reservations</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>123 Lemon Lane</li>
                <li>Chicago, IL</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@littlelemon.com</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Social</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
