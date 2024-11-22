import React, { useContext, useEffect, useState } from 'react';
import UserContext from './../UserContext';

function SingleCardView({singleCardObId, singleCardId}) {

    const {getObIdCall} = useContext(UserContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if(singleCardObId !== null) {
            getCard(singleCardObId);
        }
    },[singleCardObId]);

    async function getCard(cardObId) {
        await getObIdCall({_id: cardObId})
        .then(data => setData(data));
    }

    async function addToDeck(cardId) {
        singleCardId([cardId, '+']);
    }
    
    async function removeFromDeck(cardId) {
        singleCardId([cardId, '-']);
    }

    if(singleCardObId !== null){
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
                        <td>
                            <button onClick={() => addToDeck(data.id)}>+</button>
                            <button onClick={() => removeFromDeck(data.id)}>-</button>
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