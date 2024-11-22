import React, { useEffect, useState } from 'react';

function DeckBuilderView({singleCardId}) {
    
    const [deck, setDeck] = useState(new Map([]));

    useEffect(() => {
        if(singleCardId !== null && singleCardId[1] === "+") { //add a card
            addCard(singleCardId[0]);
        }
        else if(singleCardId !== null && singleCardId[1] === "-") { //remove a card
            removeCard(singleCardId[0]);
        } 
    },[singleCardId]);

    
    async function addCard(cardId) {
        if(deck.has(cardId) && deck.get(cardId).count < 4) setDeck(deck => new Map(deck.set(cardId, {count: deck.get(cardId).count + 1})));
        else if(!deck.has(cardId)) setDeck(deck => new Map(deck.set(cardId, {count: 1})));
    }

    async function removeCard(cardId) { //deck.delete(cardId)
        if(deck.has(cardId) && deck.get(cardId).count <= 1) {
            let copyDeck = new Map(deck);
            copyDeck.delete(cardId);
            setDeck(copyDeck);
        } 
        else if(deck.has(cardId)) setDeck(deck => new Map(deck.set(cardId, {count: deck.get(cardId).count - 1})));
    }

    //use cardId to get pictures to display cards in deck

    return (
        <div>
            {[...deck].map((e, index) => {
                return(
                    Array.from({length: e[1].count}).map((_, index) =>
                        <button key={index}>{e[0]}</button>
                    )
                )  
            })}     
            </div>
        )

};


export default DeckBuilderView;