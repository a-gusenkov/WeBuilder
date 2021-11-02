import React from 'react';

function Categories() {

    return (
        <div>
            <body>

                <div class="text-center">
                    <h4>What categories do you want in your website?</h4>

                    <div class="position-relative">
                        <label class="container">About Me/ Bio
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Education
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Experience
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Projects
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">Contact Me
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>

                    </div>
                </div>
            </body >
        </div >
    );
}
export default Categories;