import Card from 'react-bootstrap/Card'
import { BsFillBarChartLineFill } from "react-icons/bs";

const GalleryCards = (props) => {
    return (<>
        <Card className="gallery-card-width">
            {/* <Card.Img  src={BsFillBarChartLineFill} /> */}
            <BsFillBarChartLineFill className="icon-size"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    </>);
}

export default GalleryCards;