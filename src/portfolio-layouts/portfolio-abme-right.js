import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio_style.css';
import avatar from "./Blank-Avatar.png"

class PortfolioABMERight extends Component {
    render() {
        return (
            <div>
                <div class="intro" id="intro">
                <br/>
                <div class="container about"> 
                <div class="row">

                    

                    <div class="imageAbout col-lg">
                    <img src={avatar} class="img-fluid" alt="My Photo"  />
                    </div>
                    <div class="textAbout col-lg">

                        <h2 class="yellow">About Me</h2>

                        
                        
                        <p class="lead " >
                        I’m Farukh and I’m a junior at the City Univesity of New York majoring in Computer Science. 
                        Currently I'm a full-stack web development fellow at CUNY Tech Prep, a selective JavaScript program for CUNY students, where I’m working on a portfolio building tool called WeBuilder.
                         My goal for this project is to allow people to feel confident in their skills as they start their journey in the tech industry.
                        A little more about myself...
                        </p>
                

                    </div>

                    
                </div>
             
                </div>
                </div>
            </div>
        );
    }
}


export default PortfolioABMERight;