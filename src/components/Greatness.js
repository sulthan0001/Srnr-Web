import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Greatness.css";
import greatimg from "../assets/HappyPeople.jpg";
import { Link } from 'react-router-dom';

const Greatness = () => {
  const words = [
    { text: "Innovation", color: "#FFFFFF" },
    { text: "Creativity", color: "#407bff" },
    { text: "Collaboration", color: "yellow" },
    { text: "Commitment", color: "violet" },
  ];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, );

  return (
    <Container fluid className="great pt-5 pb-5" >
      <Row className="gap-5">
        <Col md={6} lg={7} style={{textAlign:"center"}}>
          {" "}
          <h1 className="fs-1">
            Greatness <span style={{ fontWeight: "bold" }}>Starts</span> with{" "}
            <br /> <span style={{ fontWeight: "bold" }}>Teamwork and</span>{" "}
            <span style={{ color: currentWord.color }}>{currentWord.text}</span>
          </h1>
          <p>
            "Streamline, manage and optimize your IT processes effortlessly.
            Experience seamless collaboration, real-time monitoring and
            innovative solutions - all in one platform".
          </p>
          <Link to="/careers" target="_blank" style={{ textDecoration: "none" }}>
            <button className="button mt-5">Get started now</button>
          </Link>
        </Col>  
        <Col  md={5}  lg={4}>
          <img src={greatimg} alt="Happyimg" className="c1-img img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Greatness;
