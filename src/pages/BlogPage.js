import React from 'react'
import { Container } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Error from '../assets/Error-Page.png';

function Blogs() {
  return (
<Container fluid className='d-flex '>
<Row className='justify-content-center align-items-center'>
  <Col md={4}><img src={Error} alt='' className='img-fluid'/></Col>
</Row>
</Container>
  )
}

export default Blogs