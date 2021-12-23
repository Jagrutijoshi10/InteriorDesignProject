import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import InfoWithImage from '../common/infoWithImage';
import constants from '../constants';
import aboutUs1 from '../assets/image-about-01.jpg';
import aboutUs2 from '../assets/image-about-02.jpg';
import vision from '../assets/vision.jpg';
import mission from '../assets/mission.jpg';
import values from '../assets/values.jpg';


const AboutUs = () => {
    return <>
        <div>
            <h2 className="header">About Us</h2>
            <div>
                <InfoWithImage image={aboutUs1} text={constants.aboutUs1.text} header={constants.aboutUs1.header} leftImage={false}/>

                <InfoWithImage image={aboutUs2} text={constants.aboutUs2.text} header={constants.aboutUs2.header} leftImage={true}/>

                <InfoWithImage image={vision} text={constants.vision.text} header={constants.vision.header} leftImage={false}/>

                <InfoWithImage image={mission} text={constants.mission.text} header={constants.mission.header} leftImage={true}/>

                <InfoWithImage image={values} text={constants.values.text} header={constants.values.header} leftImage={false}/>


            </div>
        </div>
    </>

}




export default AboutUs;
