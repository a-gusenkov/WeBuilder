import React from 'react';
import { useHistory } from "react-router-dom";
import logo from './../pics/weBuilder.png';

function HomePage() {

    let history = useHistory();
    return (
        <div>
            <body>
                <div class="text-center">
                    <img src={logo} className="img-fluid-logo" alt="logo"></img>
                    <h4>Build your website. Build your confidence.</h4>
                    <button onClick={() => {
                        history.push('/categories')
                    }}
                        type="button" class="btn btn-primary" >Build my website</button>
                </div>

                <div>

                </div>

            </body>
        </div>
    );

}
export default HomePage;