import React from 'react';
import { useHistory } from "react-router-dom";
function NextBack() {
    let history = useHistory();
    return (
        <div>
            <button onClick={() => {
                history.push('/homePage')
            }} id="back">Back</button>

            <button onClick={() => {
                history.push('/themes')
            }} id="next">Next</button>
        </div>
    );
}
export default NextBack;