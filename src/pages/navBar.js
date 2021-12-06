
import './navBar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";
function NavBar() {

    let history = useHistory();

    return (

        <div className="App">
            <Container className="center">
                <Row >
                    <Col sm={30} className="color-nav">

                        <Nav className="flex-column">
                            <p className="nav-heading"> Layout </p>

                            <Nav.Link onClick={() => {
                                history.push('/categories')
                            }}><p className="nav-lin">Categories</p>
                            </Nav.Link>

                            <Nav.Link onClick={() => {
                                history.push('/themes')
                            }}><p className="nav-lin">Themes</p>
                            </Nav.Link>

                            <Nav.Link onClick={() => {
                                history.push('/aboutMe')
                            }}><p className="nav-lin">About Me</p>
                            </Nav.Link>

                            <Nav.Link onClick={() => {
                                history.push('/education')
                            }}><p className="nav-lin">Education</p>
                            </Nav.Link>

                            <Nav.Link onClick={() => {
                                history.push('/experience')
                            }}><p className="nav-lin">Experience</p>
                            </Nav.Link>
                            <Nav.Link onClick={() => {
                                history.push('/projects')
                            }}><p className="nav-lin">Projects</p>
                            </Nav.Link>

                            <Nav.Link onClick={() => {
                                history.push('/contactMe')
                            }}><p className="nav-lin">Contact Me</p>
                            </Nav.Link>

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