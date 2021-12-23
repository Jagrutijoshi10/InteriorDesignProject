import CarouselDisplay from '../common/carousel'
import Cards from '../common/cards';
import { Row, Container, Col } from 'react-bootstrap';
import CountUpLoader from '../common/countUp'
import ChooseUs from '../common/chooseUs';
import threeDDesign from '../assets/3D-design.png';

const HomePage = () => {
    return <div>
        <CarouselDisplay />
        <div>
            <Container >
                <Row className="position-cards">
                    <Col xs={6} md={4}><Cards text="Your Dream Home becomes complete only after perfect interior design." /></Col>
                    <Col xs={6} md={4}><Cards text="A Perfect Design lets your interior dream become reality." /></Col>
                    <Col xs={6} md={4}><Cards text="An Excellent design is successful only when it is implemented as it is reality." /></Col>
                </Row>
            </Container>

        </div>
        <div className="count-up-styles">
            <CountUpLoader />
        </div>
        <div>
            <Container >
                <Row className="position-image-3d">
                    <Col xs={6} md={6}>
                        <span className="design-font">Free 3D design <br /> for your interior needs</span>
                    </Col>
                    <Col xs={6} md={6}>
                        <img src={threeDDesign} />
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="p-2 w-100">
            <div className="d-flex justify-content-end mt-5">

            </div>
        </div>
        <div className="count-up-styles">
            <ChooseUs />
        </div>
    </div>

}




export default HomePage;
