import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import { Plus } from 'react-bootstrap-icons';
import {FormControl,Form} from 'react-bootstrap';


class TextBoxAboutMe extends React.Component {


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.values.join(', '));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
           
           <Form.Group controlId="formFile" className="mb-3 input-file section-description">
                <Form.Label>Input About Me Picture</Form.Label>
                <Form.Control type="file" className="label-width"/>
            </Form.Group>

            <form>
                <p className="section-description"> Enter Your About Me Text Here: </p>
                <label className="label-width">
                <textarea className="description-input" rows={5}> </textarea>
                </label>
            </form> 
      </form>
    );
  }
}


export default TextBoxAboutMe;