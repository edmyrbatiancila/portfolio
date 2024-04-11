import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    render() {
        return (
          <Navbar fixed="top" bg="dark" variant="light">
            <Container>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="link" to="/aboutMe">
                    About Me
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="link" to="/gallery">
                    Gallery
                  </Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        );
    }
}

export default NavBar;