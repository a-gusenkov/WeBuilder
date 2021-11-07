import React from 'react';
import { useHistory } from "react-router-dom";

function HomePage() {

    let history = useHistory();
    return (
        <div>
            <body>
                <div class="text-center">
                    <h1>WeBuilder</h1>
                    <h5>Build your website. Build your confidence.</h5>
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