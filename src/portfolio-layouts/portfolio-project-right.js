import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio_style.css';
import projectImg from "./Project.png";


class PortfolioProjRight extends Component {
    render() {
        return (
            <div>
                <div class="projects" id="projects">
                    <h1 className="titl yellow" >Projects</h1>
                    <br/>
                    <div className="container"> 
                        <div className="row">
                            <div className="col-5 hopMath">
                                <img src={projectImg} className="img-fluid projImg" alt=""/>
                        

                            </div>
                            <div className="col-7">
                                <h3>weBuilder</h3>
                                <p class="projDes">Collaborated with in a team of 3 to build a 
                                    web application that creates a portfolio website for users. Developed 
                                    using React, Node.js, Express.js, and PostgreSQL to allow for customization
                                    of a personal website. </p>
                                
                            </div>
                        </div>
            
                
                    </div>

               
                 </div>
            </div>
        );
    }
}


export default PortfolioProjRight;