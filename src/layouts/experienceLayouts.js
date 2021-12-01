import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import logo from './../pics/weBuilder.png';

class ExperienceLayouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor_One: "",
            bgColor_Two: "",
            bgColor_Three: "",
        }
    }

    boxClick_One = (e) => {
        this.setState({
            bgColor_One: "rgba(30, 139, 195, 1)",
            bgColor_Two: "rgba(153, 42, 42, 0.01)",
            bgColor_Three: "rgba(153, 42, 42, 0.01)"
        })
        console.log("You chose the Layout1");
    }

    boxClick_Two = (e) => {
        this.setState({
            bgColor_One: "rgba(153, 42, 42, 0.01)",
            bgColor_Two: "rgba(30, 139, 195, 1)",
            bgColor_Three: "rgba(153, 42, 42, 0.01)"
        })
        console.log("You chose the Layout2");
    }

    boxClick_Three = (e) => {
        this.setState({
            bgColor_One: "rgba(153, 42, 42, 0.01)",
            bgColor_Two: "rgba(153, 42, 42, 0.01)",
            bgColor_Three: "rgba(30, 139, 195, 1)"
        })
        console.log("You chose the Layout2");
    }

    render() {
        return (
            <div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_One }}
                    onClick={this.boxClick_One}>
                    <Card style={{ backgroundColor: '#C2A5FF', padding: '20px', height: '14rem', borderRadius: '25px' }}>
                        <div className="row no-gutters">
                            <div className="col">
                                <img src={logo} className="img-fluid" alt="avatar" width="80%"></img>
                            </div>
                            <div className="col-7">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>Job Title</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Company Name</Card.Subtitle>
                                    <Card.Text>MM/YY - MM/YY</Card.Text>
                                    <Card.Text>blablabalaalaaalalalalallala</Card.Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Two }}
                    onClick={this.boxClick_Two}>
                    <Card style={{ backgroundColor: '#C2A5FF', padding: '20px', height: '14rem', borderRadius: '25px' }}>
                        <div className="row no-gutters">
                            <div className="col-7">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>Job Title</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Company Name</Card.Subtitle>
                                    <Card.Text>MM/YY - MM/YY</Card.Text>
                                    <Card.Text>blablabalaalaaalalalalallala</Card.Text>
                                </div>
                            </div>
                            <div className="col">
                                <img src={logo} className="img-fluid" alt="avatar" width="80%"></img>
                            </div>
                        </div>
                    </Card>
                </div>
                {/*
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Three }}
                    onClick={this.boxClick_Three}>
                    <Card style={{ backgroundColor: '#C2A5FF', padding: '20px', height: '14rem', borderRadius: '25px'    }}>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="card-block px-2">
                                    <img src={logo} className="img-fluid" alt="logo" width="20%"></img>
                                    <Card.Title style={{ paddingTop: "20px" }}>Job Title</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Company Name</Card.Subtitle>
                                    <Card.Text>MM/YY - MM/YY</Card.Text>
                                    <Card.Text>blablabalaalaaalalalalallala</Card.Text>                    
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                */}
            </div>
        );
    }
}

export default ExperienceLayouts;