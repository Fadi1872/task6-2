import { Col, Row } from "react-bootstrap"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import backGroundImg from './../../../assets/appleStore.jpg'
import phone from './../../../assets/15proMax.webp'
import Accordion from 'react-bootstrap/Accordion'
import './Customers.css'

const Customers = () => {
    return (
        <SectionTitle
            className='text-white fixedBackimg'
            style={{ '--fixed-img': `url(${backGroundImg})` }}
            title='INNOVATIVE QUALITIES & FEATURES'
            subTitle='SHOW YOURS TO THE WORLD'>
            <Row className="justify-content-between mt-5">
                <Col lg={6}>
                    <img src={phone} alt="phone" className="w-100" />
                </Col>
                <Col lg={6}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item className="border-0" eventKey="0">
                            <Accordion.Header className="border-bottom py-3">
                                Accordion Item #1
                                <p class="mb-0 ms-auto cursor position-relative square">
                                    <span class="position-absolute top-50 start-50 bg-white rounded-5 line transition-5 rorate90"></span>
                                    <span class="position-absolute top-50 start-50 translate-middle bg-white rounded-5 line"></span>
                                </p>
                            </Accordion.Header>
                            <Accordion.Body className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="border-0" eventKey="1">
                            <Accordion.Header className="border-bottom py-3">
                                Accordion Item #2
                                <p class="mb-0 ms-auto cursor position-relative square">
                                    <span class="position-absolute top-50 start-50 bg-white rounded-5 line transition-5 rorate90"></span>
                                    <span class="position-absolute top-50 start-50 translate-middle bg-white rounded-5 line"></span>
                                </p>
                            </Accordion.Header>
                            <Accordion.Body className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="border-0" eventKey="2">
                            <Accordion.Header className="border-bottom py-3">
                                Accordion Item #2
                                <p class="mb-0 ms-auto cursor position-relative square">
                                    <span class="position-absolute top-50 start-50 bg-white rounded-5 line transition-5 rorate90"></span>
                                    <span class="position-absolute top-50 start-50 translate-middle bg-white rounded-5 line"></span>
                                </p>
                            </Accordion.Header>
                            <Accordion.Body className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="border-0" eventKey="3">
                            <Accordion.Header className="border-bottom py-3">
                                Accordion Item #2
                                <p class="mb-0 ms-auto cursor position-relative square">
                                    <span class="position-absolute top-50 start-50 bg-white rounded-5 line transition-5 rorate90"></span>
                                    <span class="position-absolute top-50 start-50 translate-middle bg-white rounded-5 line"></span>
                                </p>
                            </Accordion.Header>
                            <Accordion.Body className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </SectionTitle>
    )
}

export default Customers