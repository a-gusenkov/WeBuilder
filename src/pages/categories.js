/* eslint-disable no-undef */
import React from 'react';
import NextBack from './nextBack';
import { Helmet } from 'react-helmet';


class Categories extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            category: {
                "About Me/ Bio": false,
                Education: false,
                Experience: false,
                Projects: false,
                "Contact Me": false,


            }
        }


    }

    handleCheckBox = event => {

        let state = this.state;
        state.category[event.target.value] = event.target.checked;
        this.setState(state);
        console.log(this.state.category);
    }


    render() {

        return (
            <div>
                <body>
                    <Helmet>
                        <style>{'body { background: #6D44C5; }'}</style>
                    </Helmet>
                    <div class="text-center">

                        <h4>What categories do you want in your website?</h4>

                        <div class="position-relative">

                            {Object.keys(this.state.category).map(cat => {
                                return <label class="container">
                                    {cat}
                                    <input onChange={this.handleCheckBox} type="checkbox"
                                        name="category"
                                        value={cat}
                                        checked={this.state.category[cat]} />
                                    <span class="checkmark"></span>
                                </label>
                            })}

                            {/*
                            <label class="container">Education
                                <input onChange={this.handleCheckBox} type="checkbox"
                                    name="category"
                                    value="education"
                                    checked={this.state.category.education} />
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Experience
                                <input onChange={this.handleCheckBox} type="checkbox"
                                    name="category"
                                    value="experience"
                                    checked={this.state.category.experience} />
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Projects
                                <input onChange={this.handleCheckBox} type="checkbox"
                                    name="category"
                                    value="projects"
                                    checked={this.state.category.projects} />
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">Contact Me
                                <input onChange={this.handleCheckBox} type="checkbox"
                                    name="category"
                                    value="contactme"
                                    checked={this.state.category.contactme} />
                                <span class="checkmark"></span>
                            </label>
*/}
                        </div>
                        <NextBack />
                    </div>

                    {/*
                <button onClick={() => {
                    history.push('/homePage')
                }} href={'/themes'} id="back">Back</button>

                <button onClick={() => {
                    history.push('/themes')
                }} href={'/themes'} id="next">Next</button>
            */}
                </body >
            </div >
        );

    }
}
export default Categories;