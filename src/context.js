import React from 'react';

const GameContext = React.createContext({
    collected: 0,
    playerHealth: 100,
    currFoodPos: { bottom: 0, left: 0 },
    difficulty: 1,
    setCollected: () => {},
    setPlayerHealth: () => {},
    setDifficulty: (value) => {}
});

export default GameContext;