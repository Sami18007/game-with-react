import React from 'react';

const CollectedContext = React.createContext({
    collected: 0,
    setCollected: () => {}
});

export default CollectedContext;