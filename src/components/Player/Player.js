import React from 'react';
import './Player.css';

function Player(props) {
    const length = props.foodsCollected;
    let parts = [<div id={"playerHead"} className={"playerPart"} key={0}></div>];

    // Create the player - length depends on state
    for(let i = 0; i < length; i++) {
        parts.push(<div className={"playerPart"} key={i + 1}></div>);
    }

    // Set where different parts of the player should be located related to each other
    // let setTailsPosition = setInterval(() => {
    //     if (document.getElementById("player")) {
    //     }
    // }, constants.REFRESH_RATE);
    
    return (
        <div id={"player"}>
            {parts.map((element) => element)}
        </div>
    );
}

export default Player;