import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import {
  facebook,
  instagram,
  printerest,
  reddit,
  twitter,
  youtube,
} from "../icons/svgIcons";
export function NavigationTabSocialMedia() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <p> Welcome to Clicon online eCommerce store </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">Follows Us:</Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                <Image src={twitter} alt="" />
              </Nav.Link>
              <Nav.Link eventKey={3} href="#memes">
                <Image src={facebook} alt="" />
              </Nav.Link>
              <Nav.Link eventKey={4} href="#memes">
                <Image src={printerest} alt="" />
              </Nav.Link>
              <Nav.Link eventKey={5} href="#memes">
                <Image src={reddit} alt="" />
              </Nav.Link>
              <Nav.Link eventKey={6} href="#memes">
                <Image src={youtube} alt="" />
              </Nav.Link>
              <Nav.Link eventKey={7} href="#memes">
                <Image src={instagram} alt="" />
              </Nav.Link>
              <Nav className="lang_Curr d-flex gap-2">
                <select name="Language">
                  <option value="Eng">Eng</option>
                </select>
                <select name="Currency">
                  <option value="USD">USD</option>
                </select>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
