import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';


const InfoWithImage = (props) => {
    return <>
        <div>
            <Container>
                <Row>
                    <Col>
                        {props.leftImage ? `<h3>${props.header}</h3>${props.text}` : <img src={props.image} />}
                    </Col>
                    <Col>
                        {!props.leftImage ? `<h3>${props.header}</h3>${props.text}` : <img src={props.image} />}
                    </Col>
                </Row>
            </Container>
        </div>
    </>

}




export default InfoWithImage;
