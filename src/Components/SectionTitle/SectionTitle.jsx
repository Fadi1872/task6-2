import { Container } from "react-bootstrap";
import { Children } from 'react';
import './SectionTitle.css';

const SectionTitle = ({title, subTitle, children, className, style}) => {
    return (
        <section className={className} style={style}>
            <Container className="py-5">
                <h1 className="text-center mb-3">{title}</h1>
                <p className="text-center opacity-75 letterSpacing">{subTitle}</p>
                {children}
            </Container>
        </section>
    )
}

export default SectionTitle