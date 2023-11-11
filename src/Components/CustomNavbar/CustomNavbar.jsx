import './CustomNavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './../../assets/logo.svg'
import { Col, Row } from 'react-bootstrap';
import NavList from './../NavList/NavList';
import iphone from './../../assets/IPhone15ProMax.jpg';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';





const CustomNavbar = () => {
    const ssdCardH= 'SSD CARD';
    const ssdCard = ['Affinity M20','Affinity P40 Pro','PO V40 ThinQ','Tencho 7.3','Tencho 8.1','Nexian','Ningbo','Fix A Phone','Hisense','Force Cell'];
    const PowerH = 'POWER BANKS';
    const Power = ['Spots 8 Lite','Spots ERA 5X','Tencho 8.1','Phonelink','Musah','Connect 4','Alcatel','MobiAir','Beat Cell','Hunk Cell'];
    const earPhonrH = 'EARPHONE';
    const earPhonr =['Spots Y93 1815','Tencho F12 Pro','Telefonika','T-Blast','Alcatel','Ampy','Crystal Cell','MOI Cell','Groove Cell','Olly Cell'];
    const androidH = 'ANDROID';
    const android = ['Tencho 10 Lite','Tencho 7.3','Spectrum','Hisense','Bluesky','GreatDid','Mastic','Pigeon Cell','Arise Cell','Ritz Cell'];

    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState('nav-menu');
    const [navToggle, setNavToggle] = useState(false);
    const [left, setLeft] = useState(100);
    const handleClose = () => {
        setClicked('');
        setShow(false);
    }
    const handleShow = () => {
        setClicked('clicked');
        setShow(true);
    }
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(true)
    }
    const handleCloseMenu = () => {
        setShowMenu(false)
    }
    

    const handleNavToggle = () => {
        let width = window.innerWidth;
        (width < 992)? setNavToggle(true): setNavToggle(false);
    }
    window.addEventListener('load' ,handleNavToggle);
    window.addEventListener('resize' ,handleNavToggle);



    return (
        <>
        <Navbar expand="lg" className="bg-white fixed-top">
            <Container>
            <Navbar.Brand href="#home">
                <img
                src={logo}
                className="d-inline-block align-top w-100"
                alt="Phono logo"
                />
            </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='me-4'>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/shopNow'>Shop Now</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" show={showMenu} onMouseEnter={handleShowMenu} onMouseLeave={handleCloseMenu}>
                            {
                                !navToggle&&<Row className='p-3'>
                                                <NavList title={ssdCardH} array={ssdCard}/>
                                                <NavList title={PowerH} array={Power}/>
                                                <NavList title={earPhonrH} array={earPhonr}/>
                                                <NavList title={androidH} array={android}/>
                                                <Col className='d-flex align-items-center'>
                                                    <img src={iphone} alt="iPhone" className='w-100' />
                                                </Col>
                                            </Row>
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <Dropdown className='justify-self-end'>
                        <Dropdown.Toggle id="dropdown" className='bg-transparent border-0 text-dark'>
                            US
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='start-50 translate-middle-x'>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {
                        navToggle&& <div className={`nav-menu mt-3 ${clicked}`} onClick={(show)?handleClose:handleShow}>
                                        <span className="toggler-icon top-bar transition-5"></span>
                                        <span className="toggler-icon middle-bar transition-5"></span>
                                        <span className="toggler-icon bottom-bar transition-5"></span>
                                    </div>
                    }
                </div>
                
            </Container>
        </Navbar>
        
        {
            navToggle&& <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Body className='position-relative overflow-x-hidden'>
                                <ul className='navbar-nav'>
                                    <li className='grayBgHover transition-5 p-3'>
                                        <Link to='/' className='text-decoration-none text-dark'>Home</Link>
                                    </li>
                                    <li className='grayBgHover transition-5 p-3'>
                                        <Link to='/shopNow' className='text-decoration-none text-dark'>Shop Now</Link>
                                    </li>
                                    <li className='grayBgHover transition-5 p-3'>
                                        <Link to='/about' className='text-decoration-none text-dark'>Cart</Link>
                                    </li>
                                    <li className='grayBgHover transition-5 p-3 d-flex justify-content-between align-items-center' onClick={() => {setLeft(0)}}>
                                        <p className='mb-0 text-dark'>Collections</p>
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </li>
                                </ul>
                                <Row className={`bg-white position-absolute top-0 start-${left} transition-5 p-3 w-100 h-100 overflow-y-scroll`}>
                                    <div className='grayBgHover transition-5 p-3 grayBg rounded-3 d-flex justify-content-between align-items-center' onClick={() => {setLeft(100)}}>
                                        <FontAwesomeIcon icon={faArrowLeft}/>
                                        <p className='mb-0 text-dark fs-3'>Collections</p>
                                    </div>
                                    <NavList title={ssdCardH} array={ssdCard}/>
                                    <NavList title={PowerH} array={Power}/>
                                    <NavList title={earPhonrH} array={earPhonr}/>
                                    <NavList title={androidH} array={android}/>
                                    <Col className='d-flex justify-content-center'>
                                        <img src={iphone} alt="iPhone" className='mt-3 w-75' />
                                    </Col>
                                </Row>
                            </Offcanvas.Body>
                            <div className='p-4 grayBg'>
                                hi
                            </div>
                        </Offcanvas>
        }
        </>
    )
}

export default CustomNavbar