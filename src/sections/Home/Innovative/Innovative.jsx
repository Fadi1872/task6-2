import './Innovative.css'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import InnovativeCard from '../../../Components/InnovativeCard/InnovativeCard'
import ic1 from './../../../assets/Innovative/ic5.png'
import ic2 from './../../../assets/Innovative/ic6.webp'
import ic3 from './../../../assets/Innovative/ic3.png'
import ic4 from './../../../assets/Innovative/ic1.webp'
import ic5 from './../../../assets/Innovative/ic4.png'
import ic6 from './../../../assets/Innovative/ic2.png'
import phone from './../../../assets/Innovative/iphone21424.jpg'
import { Col, Row } from 'react-bootstrap'

const Innovative = () => {
    return (
        <SectionTitle className='Transparent-whtie' title='INNOVATIVE QUALITIES & FEATURES'
            subTitle='SHOW YOURS TO THE WORLD'>
            <Row className='mt-5 position-relative'>
                <Col lg={5} sm={6}>
                    <InnovativeCard title='INTELLIGENT PROCESSOR'
                        discription='Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri'
                        imgUrl={ic1}
                        alignEnd={true} />
                    <InnovativeCard title='HD SURROUND AUDIO'
                        discription='Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am.'
                        imgUrl={ic2}
                        alignEnd={true} />
                    <InnovativeCard title='STYLISH BEVEL EDGES'
                        discription='Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
                        imgUrl={ic3}
                        alignEnd={true} />
                </Col>
                <Col lg={2} className='d-flex align-items-center justify-content-center positionAbsoluteMd'>
                    <img src={phone} alt="iPhone" className='w-75M Maxwidthimg' />
                </Col>
                <Col lg={5} sm={6}>
                    <InnovativeCard title='4.0 WIFI SPECS'
                        discription='Commodo nulla facilisi nullam vehicula ipsum a arcu sagitis ipsum sed iacus.'
                        imgUrl={ic4}
                        alignEnd={false} />
                    <InnovativeCard title='MULIT TASKING & THREADING'
                        discription='Amet consectetur adipiscing velit laoreet nega id elit pellentesque habitant morbi .'
                        imgUrl={ic5}
                        alignEnd={false} />
                    <InnovativeCard title='CLOUD STORAGE'
                        discription='Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'
                        imgUrl={ic6}
                        alignEnd={false} />
                </Col>
            </Row>
        </SectionTitle>
    )
}

export default Innovative