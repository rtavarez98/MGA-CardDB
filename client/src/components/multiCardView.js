import React, { useContext } from 'react';
import UserContext from './../UserContext';

function MultiCardView() {
    
    const {getAllCall} = useContext(UserContext);

    async function testFunc() {//change or remove
        let res = await getAllCall();
    }

    return (
        <div>
            <button onClick={testFunc}>Test Button</button>
        </div>
    )
};

export default MultiCardView;