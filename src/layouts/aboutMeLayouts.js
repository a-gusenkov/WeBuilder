import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import avatar from './../pics/avatar.svg';

class AboutMeLayouts extends Component {

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
                    <Card style={{ backgroundColor: '#C2A5FF', padding: '20px', height: '14rem' }}>
                        <div className="row no-gutters">
                            <div className="col">
                                <img src={avatar} className="img-fluid" alt="avatar" width="80%"></img>
                            </div>
                            <div className="col-7">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>FirstName LastName</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Mover. Shaker. Creator.</Card.Subtitle>
                                    <Card.Text>Welcome to my portfolio. I invite you to explore my site to get a better understanding of my specialties, technique and professional experience. What you’ll find below is a combination of commissioned work, as well as some personal passion projects of my own. Enjoy browsing, and get in touch with any questions.</Card.Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Two }}
                    onClick={this.boxClick_Two}>
                    <Card style={{ backgroundColor: '#C2A5FF', padding: '20px', height: '14rem' }}>
                        <div className="row no-gutters">
                            <div className="col-7">
                                <div className="card-block px-2">
                                    <Card.Title style={{ paddingTop: "20px" }}>FirstName LastName</Card.Title>
                                    <Card.Subtitle style={{ paddingBottom: "10px" }}>Mover. Shaker. Creator.</Card.Subtitle>
                                    <Card.Text>Welcome to my portfolio. I invite you to explore my site to get a better understanding of my specialties, technique and professional experience. What you’ll find below is a combination of commissioned work, as well as some personal passion projects of my own. Enjoy browsing, and get in touch with any questions.</Card.Text>
                                </div>
                            </div>
                            <div className="col">
                                <img src={avatar} className="img-fluid" alt="avatar" width="80%"></img>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default AboutMeLayouts;