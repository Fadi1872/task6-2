import { Col, Row } from "react-bootstrap"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import collection from './../../../assets/appleCollection.jpg'

const FrontCameras = () => {
    return (
        <SectionTitle title='RAISE YOUR EXPECTATIONS'
                    subTitle='REFINED VIEWING EXPERIENCE'>
            <Row className="justify-content-between mt-5">
                <Col md={5} className="order-md-0 order-1 text-center text-md-start">
                    <h4>42 FRONT CAMERA FOR PERFECT SHOT</h4>
                    <p>
                        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                    </p>
                    <p>
                        Diam vulputate ut pharetra sit. Elit ut aliquam purus sit amet luctus venenatis lectus. Lorem dolor sed viverra ipsum nunc aliquet. Ut consequat semper viverra nam libero. Velit ut tortor aremn.
                    </p>
                </Col>
                <Col md={5} className="BackImg order-md-1 order-0 minHeight mb-md-0 mb-5" style={{'--img-url':`url(${collection})`,'--position': 'center'}}>
                </Col>
            </Row>
        </SectionTitle>
    )
}

export default FrontCameras