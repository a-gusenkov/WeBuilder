import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio_style.css';


class PortfolioEduRight extends Component {
    render() {
        return (
            <div>
                        <div className="container floatR"> 
            <div className="row">
                <h3 id="expEdu ">Education</h3>
            </div>
            <div className="row">
                
                <div className="col-lg-12 ">
                    
                    <p className="schoolT">The City College of New York</p>
                    <span className="edu "> May 2022</span>
                    <p className="edu ">Bachelor of Science, Computer Science and Multimedia Computing, GPA:3.7</p>
                    
                    <p className="edu ">Relevant Coursework:</p>
                    <p className="edu ">JAVA Programming, Multimedia Computing, Modern Programming Techniques, Discrete Structures, Data Structures, Computer Architecture, Introduction to Digital Art, Analysis of Algorithms, Operating Systems, Design & Implementation of Large-Scale Applications, Programming Paradigms in C++</p>
                    
                    
                </div>
            </div>
        </div>
            </div>
        );
    }
}


export default PortfolioEduRight;