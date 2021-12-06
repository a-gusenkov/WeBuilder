import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import { Plus } from 'react-bootstrap-icons';
import { FormControl, Form } from 'react-bootstrap';
import Cloudinary from './cloudinary';


class TextBoxWPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: [], description: [] /*imageUrl: null, imageAlt: null,*/ };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI(){
        return this.state.name.map((el, i) => 
          
            <div key={i}>
              <Cloudinary />
              <input type="text" name={el||''}   className="name-input" placeholder="Header Name" onChange={this.handleChangeName.bind(this, i)} />
              <textarea  description={el||''}  className="description-input" placeholder="Description" onChange={this.handleChangeDescription.bind(this, i)} rows={5}/>
            </div>
          )
          
      }
    /* 
    createName() {

        return this.state.name.map((el, i) =>
            <div key={i}>
                <Cloudinary />

                <input type="text" name={el || ''} className="name-input" placeholder="Header Name" onChange={this.handleChangeName.bind(this, i)} />

            </div>
        )
    }

    createDescription() {
        return this.state.name.map((el, i) =>
            <div key={i}>
                <textarea description={el || ''} className="description-input" placeholder="Description" onChange={this.handleChangeDescription.bind(this, i)} rows={5} />

            </div>
        )
    }
    */

    handleChangeName(i, event) {
        let name = [...this.state.name];
        name[i] = event.target.value;
        this.setState({ name });
    }

    handleChangeDescription(i, event) {
        let description = [...this.state.description];
        description[i] = event.target.value;
        this.setState({ description });
    }




    addClick() {

        /*TextBox.setState(prevState => ({ values: [...prevState.values, '']}))*/
        this.setState(prevState => ({ name: [...prevState.name, ''] }))
        this.setState(prevState => ({ description: [...prevState.description, ''] }))
        //this.setState(prevState => ({ image: null }))
    }

    removeClick(i) {
        let name = [...this.state.name];
        name.splice(i, 1);
        this.setState({ name });

        let description = [...this.state.description];
        description.splice(i, 1);
        this.setState({ description });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
    }

    render() {
        if (this.props.category) {

            return (
                <div>
                    <Row><h3 className="enter-head">{this.props.name} </h3></Row>
                    <form onSubmit={this.handleSubmit}>

                        {this.createUI()}  
                        <br/>
                        <input type='button' value='remove' onClick={this.removeClick.bind(this)} />
                        <input type='button' value='add' onClick={this.addClick.bind(this)} />
                        <input type="submit" value="Save" />
                    </form>
                </div>
            );
        } else {
            return (null);
        }
    }
}


export default TextBoxWPic;