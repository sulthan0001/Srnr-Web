import React from "react";
import "../css/Footer.css";
import { Row, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import logoimg from "../assets/Svg logo.svg";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <Container fluid className="foo">
      <div className="d-flex flex-row p-3">
        <img src={logoimg} height={40} width={40} alt="logo" />
        <span className="fs-2">SRNR IT SOLUTIONS</span>
      </div>
      <Row >
        <Col xs={3} md={2} sm={3} lg={2} className="">
          <ul className="list-unstyled ms-4">
                <li>
              <a href="/" className="text-decoration-none text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-white">
                about
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-white">
                services
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-white">
                FAQ's
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-white">
                careers
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-white">
                blog's
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={3} md={2} sm={3} lg={2}>
          <ul className="list-unstyled ">
            <li>
              <a href="/" className="text-decoration-none text-white">
                contactus
              </a>
            </li>
            <li>
              <a href="/privacypolicy" className="text-decoration-none text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="/termsandcondition" className="text-decoration-none text-white">
                Terms and conditions
              </a>
            </li>
          </ul>
        </Col>
        <Col xm={3} md={4} sm={3} lg={4}>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-decoration-none text-white mr-2">
                <IoLocationOutline /> &nbsp; &nbsp; Flat No: 102, Srinilaya
                Apartments, Opp: SR Nagar New
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Police
                Station, S.R. Nagar, Hyderabad - 500038.
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-white">
                <LuPhone /> &nbsp; &nbsp; (+91) 9392892792
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-white">
                <MdOutlineMailOutline /> &nbsp; &nbsp;srnritsolutions@gmail.com
              </a>
            </li>
          </ul>
        </Col>
        <Col xm={3} md={4} sm={3} lg={4}>
          <ul className="list-unstyled">
            <li style={{ color: "yellow" }}>Newsletter</li>
            <li>
              We keep watch on how campaigns respond to the biggest challenges
              facing humanity.
            </li>
            <li className="mt-2">
              <button type="button" class="btn btn-light">
                Send Email
              </button>
            </li>
          </ul>
        </Col>
      </Row>
      <Row >
        <Col xs={10} sm={11} md={11} ><hr className="border border-white border-2 opacity-100 mt-3 ms-3"/></Col>
        <Col xs={1} sm={1} md={1}> <FaArrowUpFromBracket className="fs-3"/></Col>
      </Row>
      <Row>
        <Col xs={8} sm={9} md={10}><span className="ms-4">Legal</span>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span>© Copyrights <span style={{ color: "#4A7EF2" }}>SRNR IT SOLUTIONS</span> All Rights Reserved.</span> </Col>
        <Col xs={3} sm={2} md={2} className="gap-5" ><a href='https://www.linkedin.com/in/srnr-it-solutions-359855326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className="text-decoration-none text-white me-2 fs-5"><CiLinkedin  /></a>
        <a href='https://www.instagram.com/srnr_it_solutions/profilecard/?igsh=MWpra2swdGY2Z2NmNw== ' className="text-decoration-none text-white me-2 fs-5"><FaInstagram /></a></Col>
      </Row>
    </Container>
  );
};

export default Footer;
