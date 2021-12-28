import GalleryCards from "../common/galleryCards";
import { Row, Container, Col } from 'react-bootstrap';
import constants from '../constants';
import OwlCarouselDesign from "../common/owlCarousel";
import designGallery1 from '../assets/design-gallery-01.jpg';
import designGallery2 from '../assets/design-gallery-02.jpg';
import designGallery3 from '../assets/design-gallery-03.jpg';
import designGallery4 from '../assets/design-gallery-04.png';
import designGallery5 from '../assets/design-gallery-05.jpg';
import designGallery6 from '../assets/design-gallery-06.jpg';
import designGallery7 from '../assets/design-gallery-07.jpg';
import designGallery8 from '../assets/design-gallery-08.jpg';
import designGallery9 from '../assets/design-gallery-09.jpg';
import designGallery10 from '../assets/design-gallery-10.jpg';
import designGallery11 from '../assets/design-gallery-11.jpg';

const DesignGallery = () => {
    const residentialImages = [designGallery1, designGallery2, designGallery3, designGallery4, designGallery5]
    const commertialImages = [designGallery6, designGallery7, designGallery8, designGallery9, designGallery10, designGallery11]

    return (
        <>
            <div className="page-margin">

                <h1>Design Gallery</h1>
                <Container className="mx-auto my-5">
                    <Row>
                        <Col>
                            <GalleryCards title={constants.interiorDesign.title} text={constants.interiorDesign.text} />
                        </Col>
                        <Col>
                            <GalleryCards title={constants.interiorDecoration.title} text={constants.interiorDecoration.text} />
                        </Col>
                        <Col>
                            <GalleryCards title={constants.furnitureDecoration.title} text={constants.furnitureDecoration.text} />
                        </Col>
                        <Col>
                            <GalleryCards title={constants.officeDesign.title} text={constants.officeDesign.text} />
                        </Col>
                    </Row>
                </Container>
                <div className="mx-auto my-5">
                    <h2 className="mx-auto my-3">Residentials Interiors</h2>
                    <p className="mx-auto my-3">Make your home from better to best 
                    with greenkalaminterior's smart and compact interior designs</p>
                    <OwlCarouselDesign images={residentialImages} />
                </div>
                <div className="mx-auto my-5">
                    <h2 className="mx-auto my-3">Commercial Interiors</h2>
                    <p className="mx-auto my-3">Greenkalaminterior are rich in experienced 
                    professionals who can provide quick installation for your interior in 
                    commercial or workspace.</p>
                    <OwlCarouselDesign images={commertialImages} />
                </div>
            </div>

        </>);
}

export default DesignGallery;