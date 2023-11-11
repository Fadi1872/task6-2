import { Col, Container, Row } from "react-bootstrap";
import FeatyresCard from "../../../Components/FeaturesCard/FeatyresCard";
import feature1 from './../../../assets/Features/free-deliver-icon.webp';
import feature2 from './../../../assets/Features/offers-icon.webp';
import feature3 from './../../../assets/Features/support-icon.webp';

const Features = () => {
  return (
    <div className="border-bottom border-secondary grayBg">
        <Container>
            <Row className="justify-content-center">
              <Col lg={4} md={6}>
              <FeatyresCard img={feature1} title='FREE SHIPPING' description='For orders over $50' column={true} />
              </Col>
              <Col lg={4} md={6}>
              <FeatyresCard img={feature2} title='OFFICIAL DISCOUNTS' description='Save Big on next product' column={true} />
              </Col>
              <Col lg={4} md={6}>
              <FeatyresCard img={feature3} title='24/7 HELPLINE' description='Care till the end' column={true} />
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Features