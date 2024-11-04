import React, { useContext } from 'react';
import UserContext from './../UserContext';

function SingleCardView() {

    const {getIdCall} = useContext(UserContext);
    const {getTypeCall} = useContext(UserContext);

    async function testFuncId() {//change or remove
        //call /getId for id: 0
        let res = await getIdCall({id: 0});
    }

    async function testFuncType() {//change or remove
        let res = await getTypeCall({type: "equip"});
    }

    return (
        <div>
            <button onClick={testFuncType}>Test Button</button>
        </div>
    );
}

export default SingleCardView;