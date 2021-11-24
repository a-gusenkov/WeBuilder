import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import { Plus } from 'react-bootstrap-icons';


class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name:[] , description: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createName(){
     return this.state.name.map((el, i) => 
         <div key={i}>
            
    	    <input type="text" name={el||''}   className="name-input" placeholder="Header Name" onChange={this.handleChangeName.bind(this, i)} />

         </div>  
      
     )
  }
  createDescription(){
       return  this.state.description.map((el, i) => 
           <div key={i}>
            <textarea  description={el||''}  className="description-input" placeholder="Description" onChange={this.handleChangeDescription.bind(this, i)} rows={5}/>
            
         </div> 
       )
    }

  handleChangeName(i, event) {
     let name= [...this.state.name];
     name[i] = event.target.value;
     this.setState({ name });
  }
    handleChangeDescription(i, event) {
     let description = [...this.state.description];
     description[i] = event.target.value;
     this.setState({ description });
  }
  
  addClick(){
   
    this.setState(prevState => ({ name: [...prevState.name, '']}))
    this.setState(prevState => ({ description: [...prevState.description, '']}))
  }
  
  removeClick(i){
     let name = [...this.state.name];
     name.splice(i,1);
     this.setState({ name });

    let description = [...this.state.description];
    description.splice(i,1);
    this.setState({ description });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.values.join(', '));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
           
          {this.createName()}  
          <br/>
          {this.createDescription()} 
          <input type='button' value='remove' onClick={this.removeClick.bind(this)}/>      
          <input type='button' value='add' onClick={this.addClick.bind(this)}/>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default TextBox;