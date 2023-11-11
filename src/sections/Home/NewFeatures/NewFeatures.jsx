import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeatyresCard from "../../../Components/FeaturesCard/FeatyresCard";
import ic1 from './../../../assets/Features/ic11.webp';
import ic2 from './../../../assets/Features/ic12.webp';
import ic3 from './../../../assets/Features/ic13.avif';

const NewFeatures = () => {
    return (
        <SectionTitle title='WHAT MAKES THE ESSENTIAL DIFFERENT?' 
                    subTitle='EXPERIENCE HIGH PERFORMANCE AND SECURE'>
            <Row className="justify-content-center mt-5">
                <Col lg={4} md={6}>
                    <FeatyresCard img={ic1}
                                title='DUAL CAMERA' 
                                description='Tristique senectus et netus et malesuada ant reiet fames.'
                                topTitle='PERFECT CUT'
                                column={false} />
                </Col>
                <Col lg={4} md={6}>
                    <FeatyresCard img={ic2}
                                title='DUAL CAMERA' 
                                description='Tristique senectus et netus et malesuada ant reiet fames.'
                                topTitle='PERFECT CUT'
                                column={false} />
                </Col>
                <Col lg={4} md={6}>
                    <FeatyresCard img={ic3}
                                title='DUAL CAMERA' 
                                description='Tristique senectus et netus et malesuada ant reiet fames.'
                                topTitle='PERFECT CUT'
                                column={false} />
                </Col>
            </Row>
        </SectionTitle>
    )
}

export default NewFeatures