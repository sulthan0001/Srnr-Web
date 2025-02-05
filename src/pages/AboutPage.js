import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Guy from "../assets/guy.jpg";
import Guy1 from "../assets/photo  1.png";
import Employee from "../assets/employee.png";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import Business from "../assets/business1.jpg";
import "../css/AboutPage.css";
import Capgemini from "../assets/capegemini1.png";
import Aspire from "../assets/aspire1.png";

const AboutPage = () => {
  return (
    <div>
      <Container>
        <Row className="mb-3 mt-5">
          <Col sm={12} md={6} lg={4} className="mb-2 ">
            <Card>
              <Card.Img
                variant="top"
                src={Guy}
                width="350px"
                height="550px"
                className="rounded-bottom"
              />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                src={Guy1}
                width="314px"
                height="307px"
                className="rounded-bottom"
              />
            </Card>
            <Card className="mt-2 ">
              <Card.Img
                variant="top"
                src={Employee}
                width="314px"
                height="230px"
                className="rounded-bottom"
              />
            </Card>
          </Col>
          <Col sm={12} md={12} lg={5} className="mt-2">
            <div style={{ position: "relative" }}>
              <p>
                Welcome to <strong>SRNR IT Solutions Pvt Ltd </strong>
                where innovation meets passion and also a dynamic Company
                focused on delivering groundbreaking solutions that transform
                industries. Our team of entrepreneurs, technologists, and
                innovators work tirelessly to bring bold ideas to life and we
                embrace agility, adaptability, and a hunger for constant
                improvement.
              </p>
              <p>
                We believe in challenging the status quo, taking risks, and
                pushing the boundaries of what's possible.
              </p>
              <p>
                SRNR IT Solutions began with a vision to disrupt the information
                technology industry. Since then, we have grown from a small
                group of dedicated professionals into a rapidly scaling company.
                Despite our growth, we remain true to our entrepreneurial roots:
                staying fast, flexible and always customer-focused.
              </p>
              <Link to="/contactus" className="define-button btn btn-primary">
                {" "}
                Know More{" "}
                <span>
                  <FaLocationArrow />
                </span>
              </Link>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6} xs={12} className="mt-4" height="100px">
            <h3
              className="text-white p-3 row2clipPath"
              style={{
                clipPath:
                  "polygon(100% 0%, 93% 51%, 100% 100%, 0 100%, 0% 50%, 0 0)",
                backgroundColor: "#11284A",
              }}
            >
              How we work with clients
            </h3>
          </Col>
        </Row>
        <Row className="mb-3 imgemg mt-3">
          <Col md={5}>
            <img src={Business} alt=" " className="img-fluid" />
          </Col>
          <Col md={7}>
            <div className="text-para">
              <p>
                Increasing customer demands and AI-driven market innovations are
                reshaping industries. Self-optimizing systems are now essential
                for staying ahead.
              </p>
              <p>
                The post-digital revolution continues to gain momentum, making
                the need for rapid business transformation more critical than
                ever.
              </p>
              <p>
                We stand by our clients, wherever they are in their
                transformation journey, working across industries to drive
                meaningful change and create enduring value.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <div className="mt-4" style={{ fontFamily: "Lexend" }}>
            <h2 className="text-center fs-1">Our Core values</h2>
            <p className="text-center">
              Our values shape the culture of our organization and define the
              character of our company expectations.
            </p>
          </div>
          <Col md={5} className="mb-4" style={{ fontFamily: "Lexend" }}>
            <h3>Collaboration</h3>
            <Card style={{ backgroundColor: "#A7DD94" }}>
              <Card.Body>
                <Card.Text>
                  Collaboration is the process of working together with others
                  to achieve a common goal or complete a task. It involves
                  sharing ideas, skills, and resources while fostering open
                  communication and mutual respect among participants.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4" style={{ fontFamily: "Lexend" }}>
            <h3>Transparency</h3>
            <Card style={{ backgroundColor: "#F8B59B" }}>
              <Card.Body>
                <Card.Text>
                  Transparency refers to the practice of being open, honest, and
                  clear about processes, decisions, and information. It involves
                  sharing relevant details with stakeholders to build trust and
                  foster accountability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4" style={{ fontFamily: "Lexend" }}>
            <h3>Trust</h3>
            <Card style={{ backgroundColor: "#FCD07A" }}>
              <Card.Body>
                <Card.Text>
                  Trust refers to the confidence that clients, users, and
                  stakeholders have in an organization’s ability to deliver
                  reliable, secure, and high-quality technology solutions or
                  services. It is built over time through consistent actions,
                  transparency, and delivering on promises.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4" style={{ fontFamily: "Lexend" }}>
            <h3>Integrity</h3>
            <Card style={{ backgroundColor: "#CCB2EE" }}>
              <Card.Body>
                <Card.Text>
                  Integrity refers to the quality of being honest, ethical, and
                  consistent in actions, decisions, and behavior, even when no
                  one is watching. It is a core value that fosters trust and
                  respect in personal and professional relationships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <div className="collab">
            <h1 className="text-white text-center pt-4">Our Collaborators</h1>
            <div className="row d-flex justify-content-center mt-5 g-4 align-items-center">
              <img
                src={Capgemini}
                alt=""
                className=" img-fluid col-sm-1 col-md-2 col-lg-2 "
              />
              <img
                src={Aspire}
                alt=" "
                className="img-fluid col-sm-1 col-md-2 col-lg-2"
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
