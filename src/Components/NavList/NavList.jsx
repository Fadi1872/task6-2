import { Col } from "react-bootstrap"

const NavList = ({title, array}) => {
    return (
        <Col md='12' lg className="d-flex flex-column align-items-start">
            <h4 className="border-bottom py-2">{title}</h4>
            {
                array.map((item, index) => (
                    <a href="#" className="redHover transition-5 text-decoration-none text-dark mt-2">{item}</a>
                ))
            }
        </Col>
    )
}

export default NavList