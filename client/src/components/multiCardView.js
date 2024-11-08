import React, { useContext, useEffect, useState } from 'react';
import UserContext from './../UserContext';

function MultiCardView() {
    
    const {getAllCall} = useContext(UserContext);
    const [data, setData] = useState([]);
    
    async function getAllCards() {
        let data = await getAllCall()
        .then(data => setData(data));
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
                    <tbody key={index}>
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