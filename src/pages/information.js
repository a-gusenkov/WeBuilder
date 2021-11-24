import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import TextBox from '../layouts/textbox';
import TextBoxWPic from '../layouts/textbox-w-pic';
import {FormControl,Form} from 'react-bootstrap';
import TextBoxAboutMe from "../layouts/textbox-aboutme";
import TextBoxContactMe from "../layouts/textbox-contactme";

    
/*      
    handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    }
    handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
    }
*/
function Information() {
    let history = useHistory();
    
        return (

                <body>
                    <Helmet>
                    <style>{'body { background: #6D44C5; }'}</style>
                    </Helmet>
  
                    
                     
                        <h1 className="enter-info">Enter Your Information</h1>
                        <Container className="info-page">
                                  <div>
                                    <Row> <h3 className="enter-head"> About Me </h3></Row>
                                    <Row >   
                                      <TextBoxAboutMe/>
                                    </Row>
                                  </div>

                                  <div>
                                    <Row><h3 className="enter-head">Education </h3></Row>
                  
                                    <Row> <Col> <TextBox /> </Col> </Row>
                                  </div>
                                  <div>
                                    <h3 className="enter-head">Experience </h3>
                                  
                                    <Row> <Col> <TextBox /> </Col> </Row>
                                  </div>
                                  <div>
                                    <h3 className="enter-head">Projects </h3>
                                  
                                    <Row> <Col> <TextBoxWPic /> </Col> </Row>
                                  </div>
                                  <div>
                                    <Row><h3 className="enter-head">Contact Me </h3></Row>
                  
                                    <Row> <Col> <TextBoxContactMe /> </Col> </Row>
                                  </div>
                        </Container>

                <button onClick={() => {
                  history.push('/contactMe')}} href={'/contactMe'} id="back">Back</button>
                </body >
            
        );

    
}
export default Information;