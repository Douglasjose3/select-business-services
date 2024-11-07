import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./mynavbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link href="#about">
            {/* <h4 className="colorNav">Select Busness Services</h4> */}
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navLinkColor" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="navLinkColor" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="navLinkColor" href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link className="navLinkColor" href="#location">
              Location
            </Nav.Link>
            <Nav.Link className="navLinkColor" href="#opportunities">
              Opportunities
            </Nav.Link>
          </Nav>
          {/* <Button variant="success">Translate</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
