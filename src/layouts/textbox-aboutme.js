import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import { Plus } from 'react-bootstrap-icons';
import {FormControl,Form} from 'react-bootstrap';
import Cloudinary from './cloudinary';


function TextBoxAboutMe(props) {

  const handleSubmit = (e) => {
      alert('A name was submitted: ' + this.state.values.join(', '));
      e.preventDefault();
  }


  if (props.category) {
    return (
      <form onSubmit={this.handleSubmit}>
           
           
                <p className="section-description">Input About Me Picture</p>
                <Cloudinary />
                <p className="section-description"> Enter Your About Me Text Here: </p>
                <label className="label-width">
                <textarea className="description-input" rows={5}> </textarea>
                </label>
                <input type="submit" value="Save" />
            
      </form>
    );
    } else {
      return (null);
  }
}


export default TextBoxAboutMe;