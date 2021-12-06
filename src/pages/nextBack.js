import React from 'react';
import { useHistory } from "react-router-dom";
import {ArrowRightSquare} from 'react-bootstrap-icons';
import {ArrowLeftSquare} from 'react-bootstrap-icons';

function NextBack() {
    let history = useHistory();
    return (
        <div>
            <button onClick={() => {
                history.push('/homePage')
            }} id="back"><ArrowLeftSquare/></button>

            <button onClick={() => {
                history.push('/themes')
            }} id="next"> <ArrowRightSquare/> </button>
        </div>
    );
}
export default NextBack;