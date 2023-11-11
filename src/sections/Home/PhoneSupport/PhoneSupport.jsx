import './PhoneSupport.css'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import SupportCard from '../../../Components/SupportCard/SupportCard'
import phone from '../../../assets/phone-icn.webp'
import chat from '../../../assets/chat-icn.png'
import backGroundImg from '../../../assets/appleNewLogo.webp'
import { BiLogoVisa, BiLogoMastercard } from 'react-icons/bi'
import { GrAmex } from 'react-icons/gr'
import { BsPaypal, BsChevronRight } from 'react-icons/bs'
import { SiDiscover } from 'react-icons/si'

const PhoneSupport = () => {
    return (
        <>
            <SectionTitle
                title={`WELCOME TO PHONO SUPPORT. WE'RE HERE TO HELP.`}
                subTitle='ALWAYS ON YOUR SIDE WHEN YOU NEED HELP'>
                <Row className='mt-5'>
                    <Col md={6}>
                        <SupportCard img={phone} topTitle='HAVE ANY DOUBTS?' title='CALL US NOW' subTitle='This Number is Toll Free' number='0000 - 123 - 456789' />
                    </Col>
                    <Col md={6}>
                        <SupportCard img={chat} topTitle='WANNA TALK TO US?' title='LIVE CHAT NOW' subTitle='Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.Lorem ipsum dolor' />
                    </Col>
                </Row>
            </SectionTitle>
            <section className='min-vh-100 fixedBackimg' style={{ '--fixed-img': `url(${backGroundImg})` }}>
                <Container className='min-vh-100 d-flex flex-column justify-content-center text-white text-center'>
                    <p className="text-center text-white">ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</p>
                    <h1 className="text-center mb-4 fontSizeBig text-white">WELCOME TO PHONO SUPPORT. WE'RE HERE TO HELP.</h1>
                    <p className="text-center text-white">ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</p>
                    <Row className="justify-content-center my-5">
                        <Col lg={6} md={8} xs={11} className="bg-white ps-3 p-1 d-flex justify-content-center align-items-center rounded-5">
                            <input type="text" className="ps-2 w-75 border-0 outlineNone flex-grow-1" />
                            <div className="smallSquare bg-black btnBlack cursor rounded-pill transition-5 text-white d-flex justify-content-center align-items-center">
                                <BsChevronRight />
                            </div>
                        </Col>
                    </Row>
                    <ul className="list-inline text-center text-white mt-5 fs-4">
                        <li className="list-inline-item me-0 redHover transition-5 cursor">SEARCH</li>
                        <li className="list-inline-item me-0 redHover transition-5 cursor">HELP</li>
                        <li className="list-inline-item me-0 redHover transition-5 cursor">INFORMATION</li>
                        <li className="list-inline-item me-0 redHover transition-5 cursor">PRIVACY POLICY</li>
                        <li className="list-inline-item me-0 redHover transition-5 cursor">SHIPPING DETAILS</li>
                    </ul>
                </Container>
            </section>
            <footer>
                <div className="container py-3 d-flex justify-content-between align-items-center flex-md-row flex-column">
                    <p className="mb-0 text-center mb-md-0 mb-4">&copy; 2023, Phono (password: buddha) Design Themes</p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="#" className="text-decoration-none">
                            <BiLogoVisa className='text-dark fs-1' />
                        </a>
                        <a href="#" className="text-decoration-none">
                            <BiLogoMastercard className='text-dark fs-1' />
                        </a>
                        <a href="#" className="text-decoration-none">
                            <GrAmex className='text-dark fs-1' />
                        </a>
                        <a href="#" className="text-decoration-none">
                            <BsPaypal className='text-dark fs-2' />
                        </a>
                        <a href="#" className="text-decoration-none">
                            <SiDiscover className='text-dark fs-1' />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default PhoneSupport