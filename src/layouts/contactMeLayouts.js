import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import './../pages/navBar.css';

class ContactMeLayouts extends Component {

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
                    <Card className="color-nav" style={{ padding: '20px', height: '14rem', borderRadius: '25px' }}>
                        <div className="row no-gutters">
                            <div className="card-block px-2">
                                <Card.Title>Contact Me</Card.Title>

                                <a href={() => false} className="fa fa-github"></a>
                                <a href={() => false} className="fa fa-linkedin"></a>
                                <a href={() => false} className="fa fa-envelope"></a>

                            </div>

                        </div>
                    </Card>
                </div>
                <div className="aboutMe" style={{ backgroundColor: this.state.bgColor_Two }}
                    onClick={this.boxClick_Two}>
                    <Card className="color-nav" style={{ padding: '20px', height: '14rem', borderRadius: '25px' }}>
                        <div className="row no-gutters">
                            <div className="card-block px-2">
                                <Card.Title>Contact Me</Card.Title>

                                <a href={() => false} style={{ marginRight: "20%" }} className="fa fa-github"></a>
                                <a href={() => false} style={{ marginRight: "20%" }} className="fa fa-linkedin"></a>
                                <a href={() => false} style={{ marginRight: "20%" }} className="fa fa-envelope"></a>

                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default ContactMeLayouts;