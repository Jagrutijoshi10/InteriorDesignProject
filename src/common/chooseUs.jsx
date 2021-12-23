import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import Card from 'react-bootstrap/Card'
import { BsFillAwardFill, BsFillEmojiSmileFill, BsFillTrophyFill, BsPencilSquare, BsWalletFill } from "react-icons/bs";

const ChooseUs = () => {
    return (<>

        <div>
            <div className="big-w">W</div>
            <Card bg="white" className="choose-us-card">
                <Card.Body>
                    <h2>Why Choose Us?</h2>
                    <Container>

                        <Row className="row-margin">
                            <Col> <Card bg="dark" className="icon-width">
                                <Card.Body>
                                <BsPencilSquare  />

                                </Card.Body>
                            </Card>
                            </Col>
                            <Col> <Card bg="dark" className="icon-width">
                            <Card.Body>

                                <BsFillAwardFill />
                                </Card.Body>

                            </Card>
                            </Col>
                            <Col> <Card bg="dark" className="icon-width">
                            <Card.Body>

                                <BsFillTrophyFill />
                                </Card.Body>

                            </Card>
                            </Col>
                        </Row>
                        <Row className="row-margin">
                            <Col> <Card bg="dark" className="icon-width">
                            <Card.Body>

                                <BsWalletFill />
                                </Card.Body>

                            </Card>
                            </Col>
                            <Col> <Card bg="dark" className="icon-width">
                            <Card.Body>

                                <BsFillTrophyFill />
                                </Card.Body>

                            </Card>
                            </Col>
                            <Col> <Card bg="dark" className="icon-width">
                            <Card.Body>

                                <BsFillEmojiSmileFill />
                                </Card.Body>

                            </Card>
                            </Col>
                        </Row>
                    </Container>



                </Card.Body>
            </Card>
            <div>
            </div>
        </div>

    </>);
}

export default ChooseUs;