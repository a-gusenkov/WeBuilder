import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio_style.css';


class PortfolioExCenter extends Component {
    render() {
        return (
            <div>
            <div className="container floatC"> 
            <div className="row">
                <h3 id="experience">Experience</h3>
            </div>
            <div className="row">
                
                <div className="col-lg-12">
                    
                    <p className="edu">Software Development Fellow</p>
                    <span className="edu"> Jul 2021 - Present</span>
                    <p className="edu">CUNY Tech Prep</p>
                    
                    <ul class="edu frList">
                        <li>Selected for a technical training program, as one of 183 students out of 400+ applicants.</li>
                        <li>Learn in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & Scrum with Trello and Slack, test-driven development, and CI/CD.</li>
                    </ul>
               
                </div>
                <div class="row">
                


                    </div>

                </div>
        </div>
            </div>
        );
    }
}


export default PortfolioExCenter;