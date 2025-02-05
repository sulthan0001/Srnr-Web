import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/Logo.png';
import '../css/Header.css';
import Stack from 'react-bootstrap/Stack';
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Marquee from "react-fast-marquee";


const Header = () => {
  return (
    <div className='sticky-top'>
    
    <Container fluid className='con p-0  ' >
    <Stack direction="horizontal" className='oooo ' style={{color:'white'}} gap={5}>
    <Marquee> 
    <div className="p-2"><IoLocationOutline /> &nbsp; Flat No: 102, Srinilaya Apartments, Opp: SR Nagar 
New Police Station, S.R. Nagar, Hyderabad - 500038.

 </div> 
    <div className="p-2"><LuPhone />&nbsp; +91 9392892792</div> 
    <div className="p-2"><MdOutlineMailOutline />&nbsp; &nbsp;srnritsolutions@gmail.com</div>
    </Marquee>
  </Stack>
  </Container>
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary " >
  
      <Container fluid className=' p-0'>
        <Navbar.Brand href="#home" className='mt-2 ms-5'>
          <img src={logo} height={40} width={40} alt='logo'/>
          <span>SRNR IT SOLUTIONS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" ms-auto gap-3 mt-2" >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/faq's">FAQ's</Nav.Link>
            <Nav.Link href="/careers">Careers</Nav.Link>
            <Nav.Link href="/blog's">Blog's</Nav.Link>
            <Button  className='hjhj ms-5 me-5' href='/contactus'>Contact Us</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;