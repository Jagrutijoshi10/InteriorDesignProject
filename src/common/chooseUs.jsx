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
                                <Card.Text className="text-size">Expert Designers Onboard</Card.Text> 
                                </Card.Body>
                                                            
                            </Card>
                            </Col>

                            <Col> 
                            <Card bg="dark" className="icon-width">
                            <Card.Body>
                                <BsFillAwardFill />
                                <Card.Text className="text-size"> 45 Days Installation Guarantee</Card.Text> 

                            </Card.Body>
                            </Card>
                            </Col>

                            <Col> 
                            <Card bg="dark" className="icon-width">
                            <Card.Body>
                                <BsFillTrophyFill />
                                <Card.Text className="text-size">5 Years Warranty</Card.Text> 

                            </Card.Body>
                            </Card>
                            </Col>

                        </Row>
                        <Row className="row-margin">
                            <Col> <Card bg="dark" className="icon-width">
                            <Card.Body>

                                <BsWalletFill />
                                <Card.Text className="text-size">Economical</Card.Text> 

                                </Card.Body>

                            </Card>
                            </Col>
                            <Col> <Card bg="dark" className="icon-width">
                            <Card.Body>

                                <BsFillTrophyFill />
                                <Card.Text className="text-size">Trust and Transparency</Card.Text> 

                                </Card.Body>

                            </Card>
                            </Col>
                            <Col> <Card bg="dark" className="icon-width">
                            <Card.Body>

                                <BsFillEmojiSmileFill />
                                <Card.Text className="text-size">High Customer Satisfaction</Card.Text> 

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