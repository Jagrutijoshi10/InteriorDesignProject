import React from 'react';

import Card from 'react-bootstrap/Card'


const Cards = (props) => {

    return <>
        <div>
            <Card bg="white" className="front-card">
                <Card.Body></Card.Body>
            </Card>
            <Card bg="dark" className="background-card">
                <Card.Body>{props.text}</Card.Body>
            </Card>

        </div>
    </>
}


export default Cards;
