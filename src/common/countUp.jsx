import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import Card from 'react-bootstrap/Card'

const CountUpLoader = () => {
    return (<>
        <Container>
            <Row>
                <Col>
                    <Card bg="dark" className="text-styles">
                        <Card.Body className="text-font"><CountUp end={7} duration={1} /></Card.Body>
                        <Card.Text>Years of experience</Card.Text>
                    </Card>
                </Col>
                <Col>
                <Card bg="dark" className="text-styles">
                        <Card.Body className="text-font"><CountUp end={125} duration={1} /></Card.Body>
                        <Card.Text>Total project</Card.Text>
                    </Card>
                </Col>
                <Col>
                <Card bg="dark" className="text-styles">
                        <Card.Body className="text-font"><CountUp end={3} duration={1} /></Card.Body>
                        <Card.Text>Winning awards</Card.Text>
                    </Card>
                </Col>
                <Col>
                <Card bg="dark" className="text-styles">
                        <Card.Body className="text-font"><CountUp end={90} duration={1} /></Card.Body>
                        <Card.Text>Happy clients</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>

        

    </>);
}

export default CountUpLoader;