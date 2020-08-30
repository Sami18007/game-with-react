import React, { useContext, useEffect } from 'react';
import './Player.css';
import CollectedContext from '../../context';

function Player(props) {
    const tailLength = useContext(CollectedContext).collected;
    let parts = [<div id={"playerHead"} className={"playerPart"} key={0}></div>];

    // Create the players tail - length depends on context value "collected"
    for(let i = 0; i < tailLength; i++) {
        parts.push(<div className={"playerPart"} key={i + 1}></div>);
    }

    // Set the new playerPart on the playerHead after rendering 
    // - the new playerPart moves to the back of the players tail when the player moves
    useEffect(() => {
        let playerParts = document.getElementsByClassName("playerPart");

        playerParts[playerParts.length - 1].style.bottom = Number.parseFloat(getComputedStyle(playerParts[0]).bottom) + "px";
        playerParts[playerParts.length - 1].style.left = Number.parseFloat(getComputedStyle(playerParts[0]).left) + "px";
        playerParts[playerParts.length - 1].style.display = "block";
    });
    
    return (
        <div id={"player"}>
            {parts.map((element) => element)}
        </div>
    );
}

export default Player;