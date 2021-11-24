import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import { Plus } from 'react-bootstrap-icons';


class TextBoxContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name:[] , description: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 


 

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.values.join(', '));
    event.preventDefault();
  }

  render() {
    return (
        <form>
            <input type="text" name={''}   className="github-input" placeholder="GitHub Link" />
            <input type="text" name={''}   className="linkedin-input" placeholder="LinkedIn Link" />
            <input type="text" name={''}   className="email-input" placeholder="Email Link" />
        </form>
    );
  }
}


export default TextBoxContactMe;