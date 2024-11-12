import React, { useState } from 'react';
import SingleCardView from '../components/singleCardView';
import MultiCardView from '../components/multiCardView';
import DeckBuilderView from '../components/deckBuilderView';

function HomePage(){
    const [cardObId, setCardObId] = useState(null);
    const [addId, setAddId] = useState(null);

    return (
        <div>
            <DeckBuilderView/>
            <MultiCardView singleCardObId={setCardObId}/>
            <SingleCardView singleCardObId={cardObId}/>
        </div>
    );
}

export default HomePage;