import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';
import NavBar from './navBar';
import { UserContext } from './userContext';
import ThemeLayouts from '../layouts/themeLayouts';
import {ArrowRightSquare} from 'react-bootstrap-icons';

function Themes() {
    let history = useHistory();
    const msg = useContext(UserContext);

    return (
        <div>
            <body>
                <Helmet>
                    <style>{'body { background: #6D44C5; }'}</style>
                </Helmet>
                <div class="offset container mt-3 mb-5">
                    <div class="row">
                        <h3 id="headerH3">Themes</h3>
                        <h5 id="headerH5">Choose the theme of your website.</h5>
                    </div>
                    <div class="row">
                        <div id="navBar" class="col-lg-2 col-md-2 col-12">
                            <NavBar />

                        </div>

                        <div id="content" class="col-lg-8 col-md-8 col-12">
                            <h5>{msg.Projects.toString()}</h5>
                            <ThemeLayouts />
                        </div>
                        <div id="nextButton" class="col-lg-2 col-md-2 col-12">
                            <button onClick={() => {
                             history.push('/aboutMe')
                            }} href={'/aboutMe'} id="next"><ArrowRightSquare/></button>
                            
                    </div>
                    </div>


                </div>

            </body>
        </div>
    );
}
export default Themes;