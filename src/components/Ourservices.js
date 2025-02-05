import React from "react";
import "../css/Ourservices.css";
import Container from "react-bootstrap/Container";
import Screen from "../assets/Icon 1 (1).svg";
import Stock from "../assets/icon 2.svg";
import Profile from "../assets/icon 3 (1).svg";
import Headset from "../assets/icon 4 (1).svg";
import { Link } from 'react-router-dom';

const Ourservices = () => {
  const IconsStyle = {
    color: "#FFFFFF",
    height: "50px",
  };

  return (
    <div>
      <Container fluid className="containnnn">
        <div className="head mb-5">
          <h2 style={{ textDecoration: "none" }}>Our Services</h2>
        </div>
        <div className="services">
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="service">
              <img src={Screen} alt="" style={IconsStyle} />
              <p>Technology Consulting</p>
            </div>
          </Link>

          <Link
            to="/services"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="service">
              <img src={Stock} alt="" style={IconsStyle} />
              <p>Software Development</p>
            </div>
          </Link>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="service">
              <img src={Profile} alt="" style={IconsStyle} />
              <p>Innovative Solutions</p>
            </div>
          </Link>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="service">
              <img src={Headset} alt="" style={IconsStyle} />
              <p>IT Support & Maintenance</p>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Ourservices;
