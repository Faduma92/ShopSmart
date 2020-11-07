import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Footer.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer footer-area footer-padding">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Link to="/Aboutus" className="nav-link">About Us</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Aboutus" className="nav-link">Contact Us</Link>
        </Nav.Item>
        
      </Nav>
      <p className="text-center mt-4 mb-4">
        {" "}
        Copyright &copy; | All rights reserved | Shop Smart
      </p>
    </div>
  );
}

export default Footer;
