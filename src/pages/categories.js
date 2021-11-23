/* eslint-disable no-undef */
import React from 'react';
import NextBack from './nextBack';
import { Helmet } from 'react-helmet';


function Categories(props) {


    return (
        <div>
            <body>
                <Helmet>
                    <style>{'body { background: #6D44C5;'}</style>
                </Helmet>
                <div className="text-center" style={{ margin: '20px' }}>

                    <h4>What categories do you want in your website?</h4>

                    <div class="position-relative">

                        {Object.keys(props.category).map(cat => {
                            return <label class="container">
                                {cat}
                                <input onChange={props.changeHandler} type="checkbox"
                                    name="category"
                                    value={cat}
                                    checked={props.category[cat]} />
                                <span class="checkmark"></span>
                            </label>
                        })}

                    </div>
                    <div className="nextBack">
                        <NextBack />
                    </div>
                </div>
            </body >
        </div >
    );

}

export default Categories;