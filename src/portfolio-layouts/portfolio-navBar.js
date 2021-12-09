import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio_style.css';

class PortfolioNavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar sticky-top navbar-expand-lg navbar-dark ">
                    <div class="container-fluid">


                    <div class="collapse navbar-collapse" id="navbarColor03">
                        <ul class="navbar-nav ml-auto">


                        <li class="nav-item float-right">
                            <a class="nav-link" href="#intro">About Me
                    
                            </a>
                        </li>
                        <li class="nav-item float-right">
                            <a class="nav-link" href="#expEdu">Education</a>
                        </li>
                        <li class="nav-item float-right">
                            <a class="nav-link" href="#experience">Experience</a>
                        </li>
                        <li class="nav-item float-right">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item f">
                            <a class="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>

                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default PortfolioNavBar;