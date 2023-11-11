import React from 'react'
import FullScreenSection from '../../sections/Home/FullScreenSection/FullScreenSection'
import backGroundImg from './../../assets/appleStore.jpg'
import FrontCameras from '../../sections/Home/FrontCamers/FrontCameras'

const About = () => {
    return (
        <>
            <FullScreenSection img={backGroundImg} title='KEEP SCROLLING SO YOU GET TO KNOW US BETTER' subTitle='WHO WE ARE' />
            <FrontCameras />
        </>
    )
}

export default About