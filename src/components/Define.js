import React, { useState, useEffect } from "react";
import '../css/Define.css'
import define1 from "../assets/Define1.jpeg";
import define2 from "../assets/Define2.jpeg";
import define3 from "../assets/Define3.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const Define = () => {
  const images = [define1, define2, define3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((preIndex) => (preIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <Container fluid className="define-con ">
      <div className="mt-5 p-2 mb-3 ms-3">
        <h1> What defines us?</h1>
      </div>
      <Row className="gap-3 mb-5  ">
        <Col  md={5}  lg={5} className="defin-ge">
          <img
            src={images[currentImage]}
            alt=""
            className=" def-img ms-3 img-fluid "
          />
        </Col>
        <Col  md={6}  lg={6} className="para-text ">
          <div>
            <p>
              <span style={{ color: "#407BFF", fontWeight: "bold" }}>
                SRNR IT Solutions Pvt Ltd
              </span>{" "}
              is one of the Software organization to develop better Software
              applications, Software development and Software consultancy.
              Beyond the type and size of your business, our certified and
              skilled developers are here to help you with solution to your
              business problems through advanced software solutions.
            </p>
            <p>
              Our HR Team is prepared to assist you with competent Candidates
              for your expanding company. We also provide all HR policies and HR
              services, which help you identify the best HR solutions tailored
              to your needs.
            </p>
            <p>
              We offer human resources expertise that is aware of business
              requirements, as well as can offer workforce and resource
              management in unorganized manufacturing industries in need. We can
              supply resource management while maintaining our security.
            </p>
            <Link to="/contactus" className="define-button btn btn-primary">
              {" "}
              Know More{" "}
              <span>
                <MdArrowOutward />
              </span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Define;
