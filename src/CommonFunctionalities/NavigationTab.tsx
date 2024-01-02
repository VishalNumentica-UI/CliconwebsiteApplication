import { Container, Navbar, Nav } from "react-bootstrap";
import BrowseProductNavigator from "./BrowseProductNavigator";
function NavigationTab() {
  return (
    <div>
      <Navbar collapseOnSelect expand="xl">
        <Container>
          <Navbar.Brand href="#home">Featured Products</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">All Product</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Smart Phone
              </Nav.Link>
              <Nav.Link eventKey={3} href="#memes">
                Laptop
              </Nav.Link>
              <Nav.Link eventKey={4} href="#memes">
                Headphone
              </Nav.Link>
              <Nav.Link eventKey={5} href="#memes">
                TV
              </Nav.Link>
              <Nav.Link eventKey={5} href="#memes">
                <BrowseProductNavigator />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationTab;
