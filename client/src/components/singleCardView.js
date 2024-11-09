import React, { useContext, useEffect, useState } from 'react';
import UserContext from './../UserContext';

function SingleCardView({singleCardId}) {

    const {getIdCall} = useContext(UserContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if(singleCardId !== null) {
            getCard(singleCardId);
        }
    },[singleCardId]);

    async function getCard(cardId) {
        await getIdCall({_id: cardId})
        .then(data => setData(data));
    }

    if(singleCardId !== null){
    return (
        <div>
            <table>
                <tr>
                    <img alt="Card"/> 
                    <td>
                        <div>{data.name}</div>
                        <div>{data.id}</div>
                        <div>{data.type}</div>
                        <div>{data.cost}</div>
                        <p>{data.description}</p>
                    </td>
                </tr>
            </table>
        </div>
    );
    }
    else return (
        <div>        
        </div>
    );
}

export default SingleCardView;