import React, { useState } from 'react';
import SingleCardView from '../components/singleCardView';
import MultiCardView from '../components/multiCardView';
import DeckBuilderView from '../components/deckBuilderView';

function HomePage(){
    const [cardObId, setCardObId] = useState(null);
    const [cardId, setCardId] = useState(null);

    return (
        <div>
            <DeckBuilderView singleCardId={cardId}/>
            <MultiCardView singleCardObId={setCardObId}/>
            <SingleCardView singleCardObId={cardObId} singleCardId={setCardId}/>
        </div>
    );
}

export default HomePage;