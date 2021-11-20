import React, { useState } from "react";

import NextBack from './nextBack';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Plus } from 'react-bootstrap-icons';

class Information extends React.Component {

    constructor() {
        super();

        this.state = {
            textAreaName: "",
            textAreaDescription: ""
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
       


    }

    handleChangeName(event) {
        this.setState({textAreaName: event.target.value});
      }
    handleChangeDescription(event){
        this.setState({textAreaDescription: event.target.value});
    }
    
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

    render() {
        return (
            <div>
                <body>
                    <Helmet>
                    <style>{'body { background: #6D44C5; }'}</style>
                    </Helmet>
  
                    

                        <h1 className="enter-info">Enter Your Information</h1>
                    
                        <div class="position-relative">
                    
                                <Container>
                                    <h3 className="enter-head">About Me </h3>
                                    <Row > <Col className="enter-pic"> Picture Drag</Col></Row>
                                    <Row >
                                        <Col sm={3}>
                                        <label className="info-desc">
                                        Name:
                                        </label>
                                        </Col>
                                        <Col sm={9}>
                                        <textarea
                                            name="aboutMe-info"
                                            value ={this.state.textAreaName}
                                            onChange = {this.handleChangeName}
                                            rows={1}
                                            
                                        />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={3}>
                                        <label className="info-desc">
                                        Description:
                                        </label>
                                        </Col>
                                        <Col sm={9}>
                                        <textarea
                                                value ={this.state.textAreaDescription}
                                                onChange = {this.handleChangeDescription}
                                                rows={5}
                                            
                                            />
                                        </Col>
                                    </Row>
                                    <Row> <Plus/> </Row>

                                    <h3 className="enter-head">Education </h3>
                                        <Row >
                                            <Col sm={3}>
                                            <label className="info-desc"> 
                                            Name:
                                            </label>
                                            </Col>
                                            <Col sm={9}>
                                            <textarea
                                                value ={this.state.textAreaName}
                                                onChange = {this.handleChangeName}
                                                rows={1}
                                                
                                            />
                                            </Col>
                                        </Row>
                                
                                        <Row>
                                            <Col sm={3}>
                                            <label className="info-desc">
                                            Description:
                                            </label>
                                            </Col>
                                            <Col sm={9}>
                                            <textarea
                                                    value ={this.state.textAreaDescription}
                                                    onChange = {this.handleChangeDescription}
                                                    rows={5}
                                                
                                                />
                                            </Col>
                                        </Row>

                                        <h3 className="enter-head">Experience </h3>
                                        <Row >
                                            <Col sm={3}>
                                            <label className="info-desc"> 
                                            Name:
                                            </label>
                                            </Col>
                                            <Col sm={9}>
                                            <textarea
                                                value ={this.state.textAreaName}
                                                onChange = {this.handleChangeName}
                                                rows={1}
                                                
                                            />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={3}>
                                            <label className="info-desc">
                                            Description:
                                            </label>
                                            </Col>
                                            <Col sm={9}>
                                            <textarea
                                                    value ={this.state.textAreaDescription}
                                                    onChange = {this.handleChangeDescription}
                                                    rows={5}
                                                
                                                />
                                            </Col>
                                        </Row>

                                        <h3 className="enter-head">Projects</h3>
                                        <Row > <Col className="enter-pic"> Picture Drag</Col></Row>
                                        <Row >
                                            <Col sm={3}>
                                            <label className="info-desc"> 
                                            Name:
                                            </label>
                                            </Col>
                                            <Col sm={9}>
                                            <textarea
                                                value ={this.state.textAreaName}
                                                onChange = {this.handleChangeName}
                                                rows={1}
                                                
                                            />
                                            </Col>
                                        </Row>
                                
                                        <Row>
                                            <Col sm={3}>
                                            <label className="info-desc">
                                            Description:
                                            </label>
                                            </Col>
                                            <Col sm={9}>
                                            <textarea
                                                    value ={this.state.textAreaDescription}
                                                    onChange = {this.handleChangeDescription}
                                                    rows={5}
                                                
                                                />
                                            </Col>
                                        </Row>
                                </Container>
                        

                        
                        </div>

                        <div className="nextBack">
                        <NextBack/>
                        </div>
                    
                    

   
                </body >
            </div >
        );

    }
}
export default Information;