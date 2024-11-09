import React, { useState } from 'react';
import SingleCardView from '../components/singleCardView';
import MultiCardView from '../components/multiCardView';

function HomePage(){
    const [cardId, setCardId] = useState(null);

    return (
        <div>
            <MultiCardView singleCardId={setCardId}/>
            <SingleCardView singleCardId={cardId}/>
        </div>
    );
}

export default HomePage;