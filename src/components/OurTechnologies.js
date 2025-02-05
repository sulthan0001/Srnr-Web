import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/OurTechnologies.css";
import UI from "../assets/UI.jpg";
import Frontend from "../assets/Frontend.jpg";
import Java from "../assets/java.jpg";
import Python from "../assets/Python.jpg";
import Testing from "../assets/Testing.jpg";
import Devops from "../assets/Devops.jpg";
import Business from "../assets/Business.jpg";
import Marketing from "../assets/Marketing.jpg";
import { FaArrowRightToBracket } from "react-icons/fa6";

const OurTechnologies = () => {
  return (
    <div>
      <Container fluid className="cooon mt-3   ">
        <div className="text align-center mt-3 pt-2">
          <h2
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "white",
            }}
          >
            Our Technologies
          </h2>
        </div>
        <Row>
          <Col>
            <div className="techcontain">
              <div className="front">
                <img
                  src={UI}
                  className="img-fluid"
                  height="300"
                  width="300"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <h5 className="title-tech">
                  UI/UX
                  <FaArrowRightToBracket className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div className="back">
                <h3 className="mt-3 fs-5 text-decoration-underline">UI/UX</h3>
                <p className="mt-3">
                  Designs user-friendly interfaces for websites and apps,
                  conducts user research, and creates wireframes to enhance user
                  satisfaction and engagement.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="techcontain">
              <div className="front">
                <img
                  src={Frontend}
                  className="img-fluid"
                  height="300"
                  width="300"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <h5 className="title-tech">
                  Frontend
                  <FaArrowRightToBracket className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div className="back">
                <h3 className="mt-3 fs-5 text-decoration-underline">
                  Frontend
                </h3>
                <p className="mt-3">
                  Creates responsive, interactive web interfaces using HTML,
                  CSS, and JavaScript, ensuring seamless user experiences and
                  aligning with business objectives.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="techcontain">
              <div className="front">
                <img
                  src={Java}
                  className="img-fluid"
                  height="300"
                  width="300"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <h5 className="title-tech">
                  Java
                  <FaArrowRightToBracket className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div className="back">
                <h3 className="mt-3 fs-5 text-decoration-underline">Java</h3>
                <p className="mt-3">
                  Builds scalable, efficient Java applications, collaborating
                  with teams to deliver reliable, high-performing solutions
                  using frameworks like Spring and Hibernate.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="techcontain">
              <div className="front">
                <img
                  src={Python}
                  className="img-fluid"
                  height="300"
                  width="300"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <h5 className="title-tech">
                  Python
                  <FaArrowRightToBracket className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div className="back">
                <h3 className="mt-3 fs-5 text-decoration-underline">Python</h3>
                <p className="mt-3">
                  Develops diverse applications across web, data analysis,
                  machine learning, and automation using Python’s rich ecosystem
                  of libraries. Delivering high-performing solutions using
                  frameworks like Django and Flask.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <div className="techcontain">
              <div className="front">
                <img
                  src={Testing}
                  className="img-fluid"
                  height="300"
                  width="300"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <h5 className="title-tech">
                  Software Testing
                  <FaArrowRightToBracket className=" fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div className="back">
                <h3 className="mt-3 fs-5 text-decoration-underline">
                  Software Testing
                </h3>
                <p className="mt-3">
                  Ensures the quality of Software applications through test
                  plans, bug identification, and performance checks using manual
                  and automated testing.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="techcontain">
              <div className="front">
                <img
                  src={Devops}
                  className="img-fluid"
                  height="300"
                  width="300"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <h5 className="title-tech">
                  DevOps
                  <FaArrowRightToBracket className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div className="back">
                <h3 className="mt-3 fs-5 text-decoration-underline">DevOps</h3>
                <p className="mt-3">
                  Bridges development and operations, implementing CI/CD,
                  automating workflows, and optimizing infrastructure to ensure
                  reliable software delivery.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="techcontain">
              <div className="front">
                <img
                  src={Business}
                  className="img-fluid"
                  height="300"
                  width="300"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <h5 className="title-tech">
                  Business Analyst
                  <FaArrowRightToBracket className=" fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div className="back">
                {" "}
                <h3 className="mt-3 fs-5 text-decoration-underline">
                  Business Analyst
                </h3>
                <p className="mt-3">
                  Acts as a liaison between stakeholders and technical teams,
                  analysing processes and providing insights to improve
                  efficiency and align solutions with goals.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="techcontain">
              <div className="front">
                <img
                  src={Marketing}
                  className="img-fluid"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <h5 className="title-tech">
                  Marketing
                  <FaArrowRightToBracket className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div className="back">
                <h3 className="mt-3 fs-5 text-decoration-underline">
                  Marketing
                </h3>
                <p className="mt-3">
                  Executes strategies to promote brand identity, generate leads,
                  and drive engagement through market research, content
                  creation, and campaign management.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTechnologies;
