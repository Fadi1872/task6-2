import { Col, Row } from 'react-bootstrap';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import phone from './../../../assets/features.webp';
import './PowerFeatures.css'
import FeatyresCard from '../../../Components/FeaturesCard/FeatyresCard';
import ic1 from './../../../assets/PowerFeatures/ic10.webp';
import ic2 from './../../../assets/PowerFeatures/ic7.webp';
import ic3 from './../../../assets/PowerFeatures/ic8.png';
import ic4 from './../../../assets/PowerFeatures/ic90.webp';

const PowerFeatures = () => {
    return (
        <SectionTitle title='POSSIBILITIES. PERFORMANCE. POWER.'
            subTitle='FASTER PROCESSING WITH LESS POWER'>
            <div>
                <div className='position-relative'>
                <img src={phone} alt="phone" className='w-100' />
                <div className="position-absolute dot rounded-pill bg-black cursor" style={{ '--animation-delay': '.9s', '--line-level': '1', '--dot-id': '.9' }}></div>
                <div className="position-absolute dot rounded-pill bg-black cursor" style={{ '--animation-delay': '2.3s', '--line-level': '3', '--dot-id': '3' }}></div>
                <div className="position-absolute dot rounded-pill bg-black cursor" style={{ '--animation-delay': '.5s', '--line-level': '1', '--dot-id': '5' }}></div>
                <div className="position-absolute dot rounded-pill bg-black cursor" style={{ '--animation-delay': '1.5s', '--line-level': '3', '--dot-id': '7.1' }}></div>
                </div>
                <Row className='transformOdd'>
                    <Col md={3} xs={6}>
                        <FeatyresCard img={ic1}
                                    title='DUAL SIM CARDS' 
                                    description='Donec ultrices tincidunt arcu non sodales neque sodales ut.'
                                    column={false} />
                    </Col>
                    <Col md={3} xs={6}>
                        <FeatyresCard img={ic2}
                                    title='SCORPION PROCESSOR' 
                                    description='Tristique senectus et netus et malesuada fames ac turpis.'
                                    column={false} />
                    </Col>
                    <Col md={3} xs={6}>
                        <FeatyresCard img={ic3}
                                    title='48 HRS BACKUP' 
                                    description='Natoque penatibus et magnis dis parturient montes nascetur.'
                                    column={false} />
                    </Col>
                    <Col md={3} xs={6}>
                        <FeatyresCard img={ic4}
                                    title='48 MP CAMERA' 
                                    description='Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.'
                                    column={false} />
                    </Col>
                </Row>
            </div>
        </SectionTitle>
    )
}

export default PowerFeatures