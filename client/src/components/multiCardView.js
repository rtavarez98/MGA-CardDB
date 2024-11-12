import React, { useContext, useEffect, useState } from 'react';
import UserContext from './../UserContext';

function MultiCardView({singleCardObId}) {
    
    const {getAllCall} = useContext(UserContext);
    const {getTypeCall} = useContext(UserContext);
    const [data, setData] = useState([]);
    
    async function getAllCards() {
        await getAllCall()
        .then(data => setData(data));
    }

    async function testFuncType() {//change or remove
        let res = await getTypeCall({type: "equip"});
    }

    async function sendCardObId(obId) {
        singleCardObId(obId);
    }

    useEffect(() => {
        getAllCards()
    }, []);

    return (
        <div>
            <table>
                <thead>
                </thead>
                {data.map((e, index) => (
                    <tbody key={index} onClick={() => sendCardObId(e._id)}>
                        <td>{e.id}</td>
                        <td>{e.cost}</td>
                        <td>{e.name}</td>
                        <td>{e.type}</td>
                    </tbody>
                ))}
            </table>
        </div>
    )
};

export default MultiCardView;