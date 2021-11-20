import React, { useContext } from 'react';
import NavBar from './navBar';
import AboutMeLayouts from '../layouts/aboutMeLayouts';
import { Helmet } from 'react-helmet';
import { useHistory, } from "react-router-dom";
import { UserContext } from './userContext';
import { Redirect } from 'react-router-dom';

function AboutMe() {
    let history = useHistory();

    const msg = useContext(UserContext);

    if (!msg.AboutMe) {

        return <Redirect to="/education" />

    } else {
        return (
            <div>

                <Helmet>
                    <style>{'body { background: #6D44C5; }'}</style>
                </Helmet>
                <div class="offset container mt-3 mb-5">
                    <div class="row">
                        <div id="navBar" class="col-lg-4 col-md-4 col-12">
                            <NavBar />
                        </div>

                        <div id="content" class="col-lg-8 col-md-8 col-12">
                            <h3 id="headerH3">About Me</h3>
                            <h5 id="headerH5">Choose the layout of your about me section.</h5>
                            <AboutMeLayouts />
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    history.push('/themes')
                }} href={'/themes'} id="back">Back</button>

                <button onClick={() => {
                    history.push('/education')
                }} href={'/education'} id="next">Next</button>

            </div>
        );





        /*     
         <div>
            <Helmet>
                <style>{'body { background: #6D44C5; }'}</style>
            </Helmet>
            <div class="offset container mt-3 mb-5">
                <div class="row">
                    <div id="navBar" class="col-lg-4 col-md-4 col-12">
                        <NavBar />
                    </div>

                    <div id="content" class="col-lg-8 col-md-8 col-12">
                        <h3 >You choose not to have About Me section in our portfolio </h3>
                        <h5>If you want add layout of About Me section. Click on Categories on the left. If not click Next </h5>

                    </div>
                </div>
            </div>
            <button onClick={() => {
                history.push('/themes')
            }} href={'/themes'} id="back">Back</button>

            <button onClick={() => {
                history.push('/education')
            }} href={'/education'} id="next">Next</button>

        </div>);
        */
    }
}
export default AboutMe;