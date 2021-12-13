import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio_style.css';
import gitImg from "./git.png";
import linkedImg from "./link.png";
import emailImg from "./email.png";


class PortfolioContactV2 extends Component {
    render() {
        return (
            <div>
                <div className="container"> 
                <div className="row">
            
                    <div className="contact" id="contact">
                        <h1 className="titl yellow contactImg">Contact Me:</h1>
                        <a target="_blank" href="https://github.com/a-gusenkov"  ><img src={ gitImg } className="img-fluid gitImg contactI spaceCont" alt=""/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/anastasia-gusenkov/" ><img src={ linkedImg} className="img-fluid lnkImg contactI spaceCont" alt="" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/anastasia-gusenkov/" ><img src={ emailImg } className="img-fluid lnkImg contactI spaceCont" alt=""/></a>
                        
                    </div>
                    </div>
            </div>
            </div>
        );
    }
}


export default PortfolioContactV2;