
import './navBar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar() {
    return (

        <div className="App">
            <Container className="center">
                <Row >
                    <Col sm={30} className="color-nav">

                        <Nav className="flex-column">
                            <p className="nav-heading"> Layout </p>
                            <Nav.Link href="#"><p className="nav-lin">Themes</p></Nav.Link>
                            <Nav.Link href="#"><p className="nav-lin">About Me</p></Nav.Link>
                            <Nav.Link href="#"><p className="nav-lin">Education</p></Nav.Link>
                            <Nav.Link href="#"><p className="nav-lin">Experience</p></Nav.Link>
                            <Nav.Link href="#"><p className="nav-lin">Projects</p></Nav.Link>
                            <Nav.Link href="#"><p className="nav-lin">Contact Me</p></Nav.Link>
                            {/* 
          We can use this when a user picked not to specify something
          <Nav.Link eventKey="disabled" disabled>
          Disabled
          </Nav.Link>
          */}
                        </Nav>
                    </Col>
                    <Col sm={9}></Col>
                </Row>
            </Container>

        </div>

    );
}

export default NavBar;