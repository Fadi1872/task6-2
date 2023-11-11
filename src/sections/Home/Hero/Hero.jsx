import Carousel from 'react-bootstrap/Carousel';
import './Hero.css';
import slide1 from './../../../assets/Hero/camera.jpg';
import slide2 from './../../../assets/Hero/screen.jpg';
import slide3 from './../../../assets/Hero/usbC.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
    <Carousel fade className='w-100 vh-100'>
        <Carousel.Item className='w-100 vh-100 BackImg' style={{'--img-url':`url(${slide1})`,'--position':'left'}}>
            <Container>
                <Row className='vh-100 align-items-center'>
                    <Col lg={6} md={10} className='ms-auto text-center text-white'>
                        <p className='fs-3 notactiveLeft transition-5'>
                            Revolutionizing Photography with
                        </p>
                        <h1 className='bigFont notactiveRight transition-5 mb-4'>
                            iPhone 15 Pro Max
                        </h1>
                        <button className="btnBlack notactiveLeft text-white text-uppercase bg-black transition-5 fs-3 py-2 px-5 rounded-5">
                            shop now
                        </button>
                    </Col>
                </Row>
            </Container>
        </Carousel.Item>
        <Carousel.Item className='w-100 vh-100 BackImg' style={{'--img-url':`url(${slide2})`,'--position':'right'}}>
            <Container>
                <Row className='vh-100 align-items-center'>
                    <Col lg={6} md={10} className='me-auto text-center text-white'>
                        <h1 className='bigFont notactiveRight transition-5'>
                            Cutting-Edge Pro Max
                        </h1>
                        <p className='fs-3 notactiveLeft transition-5'>
                            Display Technology
                        </p>
                        <button className="btnBlack notactiveRight text-dark text-uppercase bg-white transition-5 fs-3 py-2 px-5 rounded-5">
                            Buy now
                        </button>
                    </Col>
                </Row>
            </Container>
        </Carousel.Item>
        <Carousel.Item className='w-100 vh-100 BackImg' style={{'--img-url':`url(${slide3})`,'--position':'left'}}>
            <Container>
                <Row className='vh-100 align-items-center'>
                    <Col lg={6} md={10} className='ms-auto text-center text-white'>
                        <p className='fs-3 notactiveLeft transition-5'>
                            Next-Gen Smartphone
                        </p>
                        <h1 className='bigFont notactiveRight transition-5 mb-4'>
                            Adopts USB-C
                        </h1>
                        <button className="btnBlack notactiveLeft text-white text-uppercase bg-black transition-5 fs-3 py-2 px-5 rounded-5">
                            shop now
                        </button>
                    </Col>
                </Row>
            </Container>
        </Carousel.Item>
    </Carousel>
    )
}

export default Hero