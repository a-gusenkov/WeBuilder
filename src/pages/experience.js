import React from 'react';
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';
import NavBar from './navBar';
import ExperienceLayouts from '../layouts/experienceLayouts';
function Experience() {
    let history = useHistory();
    return (
        <div>
            <body>
                <Helmet>
                    <style>{'body { background: #6D44C5; }'}</style>
                </Helmet>
                <div class="offset container mt-3 mb-5">
                    <div class="row">
                        <div id="navBar" class="col-lg-4 col-md-4 col-12">
                            <NavBar />
                        </div>

                        <div id="content" class="col-lg-8 col-md-8 col-12">
                            <h3 id="headerH3">Experience</h3>
                            <h5 id="headerH5">Choose the layout of your experience section.</h5>
                            <ExperienceLayouts />
                        </div>
                    </div>

                </div>
                <button onClick={() => {
                    history.push('/education')
                }} href={'/education'} id="back">Back</button>

                <button onClick={() => {
                    history.push('/projects')
                }} href={'/projects'} id="next">Next</button>
            </body>
        </div>
    );
}
export default Experience;