import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import logo from './../pics/logo.png';

class EducationLayouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor_One: "",
            bgColor_Two: "",
        }
    }

    boxClick_One = (e) => {
        this.setState({
            bgColor_One: "rgba(30, 139, 195, 1)",
            bgColor_Two: "rgba(153, 42, 42, 0.01)"
        })
        console.log("You chose the Layout1");
    }

    boxClick_Two = (e) => {
        this.setState({
            bgColor_One: "rgba(153, 42, 42, 0.01)",
            bgColor_Two: "rgba(30, 139, 195, 1)"
        })
        console.log("You chose the Layout2");
    }

    render() {
        return (
            <div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_One }}
                    onClick={this.boxClick_One}>
                    <Card style={{ backgroundColor: '#C2A5FF' }}>
                        <div className="row no-gutters">
                            <div className="col-2">
                                <img src={logo} className="img-fluid" alt="logo" style={{ justifyContent: 'center', padding: '20px', marginTop: '20px' }} width="100%" height="100%"></img>
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>Brooklyn College</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Bachelor of Science, Computer Science, GPA:3.7</Card.Subtitle>
                                    <Card.Text>Relevant Coursework:</Card.Text>
                                    <Card.Text>JAVA Programming, Multimedia Computing, Discrete Structures, Data Structures, Computer Architecture, Introduction to Digital Art, Analysis of Algorithms, Operating Systems, Programming Paradigms in C++</Card.Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Two }}
                    onClick={this.boxClick_Two}>
                    <Card style={{ backgroundColor: '#C2A5FF' }}>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="card-block px-2">
                                    <img src={logo} className="img-fluid" alt="logo" style={{ justifyContent: 'center', padding: '20px' }} width="100px" height="100px"></img>
                                    <Card.Title>Brooklyn College</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Bachelor of Science, Computer Science, GPA:3.7</Card.Subtitle>
                                    <Card.Text>Relevant Coursework:</Card.Text>
                                    <Card.Text>JAVA Programming, Multimedia Computing, Discrete Structures, Data Structures, Computer Architecture, Introduction to Digital Art, Analysis of Algorithms, Operating Systems, Programming Paradigms in C++</Card.Text>                    </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default EducationLayouts;