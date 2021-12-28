import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import { Button } from 'react-bootstrap';

const NavBar = () => {
    return  <div>
    <Navbar  expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">Interior Designs</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="home-page">Home</Nav.Link>
                <Nav.Link href="about-us">About Us</Nav.Link>
                <Nav.Link href="design-gallery">Design Gallery</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
               
            </Nav>
            {/* <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form> */}
        </Navbar.Collapse>
    </Navbar>
</div>
}




export default NavBar ;
