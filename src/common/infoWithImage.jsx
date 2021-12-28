import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';


const InfoWithImage = (props) => {
    return <>
        <div className="margin-for-row">
            <Container>
                <Row>
                    <Col>
                        {(props.leftImage) ? <> <h3>{props.header}</h3> <p>{props.text}</p> </>: <img src={props.image} alt="alt img" />}
                    </Col>
                    <Col>
                        {!props.leftImage ? <> <h3>{props.header}</h3> <p>{props.text}</p> </> : <img src={props.image} alt="alt img"/>}
                    </Col>
                </Row>
            </Container>
        </div>
    </>

}




export default InfoWithImage;
