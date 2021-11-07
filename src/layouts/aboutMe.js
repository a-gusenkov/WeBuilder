import React, { Component } from 'react';
import { Card, Stack } from 'react-bootstrap';



class AboutMe extends Component {

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
    }

    boxClick_Two = (e) => {
        this.setState({
          bgColor_One: "rgba(153, 42, 42, 0.01)",
          bgColor_Two: "rgba(30, 139, 195, 1)"
        })
    }

    render() {
    return (
        <div>
        <Stack gap={2}>
        <div className="aboutMe" style={{backgroundColor: this.state.bgColor_One}}
           onClick={this.boxClick_One}>
            <Card hoverable>
                <div className="row no-gutters">
                    <div className="col">
                        <img src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" className="img-fluid" alt="" width="100%" height="100%"></img>
                    </div>
                    <div className="col-7">
                        <div className="card-block px-2">
                        <Card.Title style={{paddingTop: "20px"}}>FirstName LastName</Card.Title>
                        <Card.Subtitle style={{paddingBottom: "10px"}}>Mover. Shaker. Creator.</Card.Subtitle>
                        <Card.Text>Welcome to my portfolio. I invite you to explore my site to get a better understanding of my specialties, technique and professional experience. What you’ll find below is a combination of commissioned work, as well as some personal passion projects of my own. Enjoy browsing, and get in touch with any questions.</Card.Text>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
           

        <div className="aboutMe" style={{backgroundColor: this.state.bgColor_Two}}
           onClick={this.boxClick_Two}>
            <Card hoverable>
                <div className="row no-gutters">
                    <div className="col-7">
                    <div className="card-block px-2">
                        <Card.Title style={{paddingTop: "20px"}}>FirstName LastName</Card.Title>
                        <Card.Subtitle style={{paddingBottom: "10px"}}>Mover. Shaker. Creator.</Card.Subtitle>
                        <Card.Text>Welcome to my portfolio. I invite you to explore my site to get a better understanding of my specialties, technique and professional experience. What you’ll find below is a combination of commissioned work, as well as some personal passion projects of my own. Enjoy browsing, and get in touch with any questions.</Card.Text>
                    </div>   
                    </div>
                    <div className="col">
                    <img src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" className="img-fluid" alt="" width="100%" height="100%"></img>
                    </div>
                </div>
            </Card>
        </div>
        </Stack>
    </div>
    );
    }
}

export default AboutMe;