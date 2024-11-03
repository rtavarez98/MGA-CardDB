import React, { useContext } from 'react';
import UserContext from './../UserContext';

function SingleCardView() {

    const {getIdCall} = useContext(UserContext);

    async function testFunc(){
        //call /getId for id: 0
        let res = await getIdCall({id: 0});
    }

    return (
        <div>
            <button onClick={testFunc}>Test Button</button>
        </div>
    )
};//call for specific card w/ id

export default SingleCardView;