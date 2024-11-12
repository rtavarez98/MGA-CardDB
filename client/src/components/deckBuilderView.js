import React, { useEffect, useState } from 'react';

function DeckBuilderView() {
    
    const [deck, setDeck] = useState([]);//array of objects(id, type, cost)

    return (
        <div>
            {deck}
        </div>
    );
}

export default DeckBuilderView;