import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';


class ThemeLayouts extends Component {

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
                <div className="row"> 
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="themeLayouts" style={{ backgroundColor: this.state.bgColor_One }}
                                onClick={this.boxClick_One}>
                    <Card
                        bg={'light'}
                        key={0}
                        text={'dark'}
                        style={{ width: '16rem', height:'16rem' }}
                        className="mb-2" 
                        >
                        <Card.Body>
                            <Card.Title style={{textAlign:'center', paddingTop:'50%'}}>{"Light"}</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                
                <div class="col-lg-6 col-md-6 col-12">
                    <div className="themeLayouts" style={{ backgroundColor: this.state.bgColor_Two }}
                        onClick={this.boxClick_Two}>
                    <Card
                        bg={'dark'}
                        key={0}
                        text={'white'}
                        style={{ width: '16rem', height:'16rem' }}
                        className="mb-2"
                        >
                        <Card.Body>
                            <Card.Title style={{textAlign:'center', paddingTop:'50%'}}>{"Dark"}</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                    
                </div>
            </div>
        );
    }
}

export default ThemeLayouts;