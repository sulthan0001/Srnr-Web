import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../css/Contact.css';
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <div>
        <Container fluid className='contact-pag p-5'>
        <div className="text align-center"><h2 style={{textDecoration:"none", textAlign:"center", color:"white"}} className=''>Contact Us</h2></div>
            <Row className='d-flex justify-content-center align-items-center mt-2'>
                <Col md={4} >
                <div >
                  <div className='d-flex' >
                    <h4><CiLocationOn className='border rounded-circle bg-white text-dark fs-1 ms-5 p-2' /></h4>
                    <h5 style={{color:'#376AED'}} className='ms-4 mt-0 fs-3'>Address</h5>
                  </div>
                  <p className='ms-5 text-white'>SRNR IT Solutions, Flat No: 102, Srinilaya Apartments, Opp: SR Nagar New Police Station, S.R. Nagar, Hyderabad - 500038.</p>
                </div>
                <div >
                  <div className='d-flex' >
                    <h4><FiPhone className='border rounded-circle bg-white text-dark fs-1 ms-5 mt-3 p-2' /></h4>
                    <h5 style={{color:'#376AED'}} className='ms-4 mt-3 fs-3'>Let's Connect</h5>
                  </div>
                  <p className='ms-5 text-white'>(+91) 9392892792 </p>
                </div>
                <div >
                  <div className='d-flex' >
                    <h4><MdOutlineMarkEmailUnread className='border rounded-circle bg-white text-dark fs-1 ms-5 p-2 mt-3' /></h4>
                    <h5 style={{color:'#376AED'}} className='ms-4 mt-3 fs-3'>Email</h5>
                  </div>
                  <p className='ms-5 text-white'>srnritsolutions@gmail.com</p>
                </div>

                </Col>
                <Col  md={8} className='d-flex justify-content-center '>
                <Form style={{
                  padding:"40px",
                  borderRadius:"15px",
                  width:"100%",
                  maxWidth:"600px"
                }}>
                  <Row >
                    <Col md={6}>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                           <Form.Control size='lg' type="text" placeholder="Your name " />
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                           <Form.Control size='lg' type="email" placeholder="Email" />
                    </Form.Group>
                    </Col> 
                  </Row>
                  <Row>
                  <Form.Group className="mb-5" controlId="formSubject">
                           <Form.Control size='lg' type="text" placeholder="subject" />
                    </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group className="" controlId="formMessage">
                           <Form.Control as="textarea" rows={4} placeholder="Message" />
                    </Form.Group>
                  </Row>
                  <Button variant="primary" type="submit" className='mt-5'>
        Submit
      </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact